// functions/api/send-email.js
const ALLOW_ORIGIN = "*";

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": ALLOW_ORIGIN,
    },
  });
}

export const onRequest = async ({ request, env }) => {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": ALLOW_ORIGIN,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": request.headers.get("Access-Control-Request-Headers") || "*",
        "Access-Control-Max-Age": "86400",
      },
    });
  }
  if (request.method !== "POST") {
    return new Response(null, { status: 405, headers: { Allow: "POST, OPTIONS", "Access-Control-Allow-Origin": ALLOW_ORIGIN } });
  }

  const API_URL = "https://api.smtpexpress.com/send";
  const PROJECT_SECRET = (env.SMTPEXPRESS_PROJECT_SECRET || "").trim();
  const SENDER = (env.SMTPEXPRESS_SENDER_EMAIL || "").trim(); // np. <project>@smtpexpress.email
  const RCPT = (env.SMTPEXPRESS_RECIPIENTS_EMAIL || "").trim();
  const TEMPLATE_ID = (env.SMTPEXPRESS_TEMPLATE_ID || "").trim();

  const missing = [];
  if (!PROJECT_SECRET) missing.push("SMTPEXPRESS_PROJECT_SECRET");
  if (!SENDER) missing.push("SMTPEXPRESS_SENDER_EMAIL");
  if (!RCPT) missing.push("SMTPEXPRESS_RECIPIENTS_EMAIL");
  if (!TEMPLATE_ID) missing.push("SMTPEXPRESS_TEMPLATE_ID");
  if (missing.length) return json({ ok:false, stage:"env", message:"Brak zmiennych środowiskowych", missing }, 500);

  // (1) pomocnicze: sanitizacja i rzutowanie do stringów
  const toStr = (v) => (v == null ? "" : String(v));
  const sanitize = (v) => toStr(v).replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "").trim();

  try {
    const input = await request.json().catch(() => ({}));

    const payload = {
      subject: "Kontakt Bizami",
      sender: { name: "Bizami", email: SENDER },
      // UWAGA: string, nie tablica obiektów
      recipients: RCPT,
      template: {
        id: TEMPLATE_ID,
        variables: {
          name: sanitize(input.username),
          email: sanitize(input.email),
          phone: sanitize(input.phone),
          company: sanitize(input.company),
          magSize: sanitize(input.itemCount),
          erp: sanitize(input.erp),
          quantity: sanitize(input.magCount),
        },
      },
    };

    const r = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${PROJECT_SECRET}`,
      },
      body: JSON.stringify(payload),
    });

    // Loguj surowy tekst odpowiedzi przy błędzie (czasem nie jest JSON-em)
    const raw = await r.text();
    let data;
    try { data = JSON.parse(raw); } catch { data = { raw }; }

    if (!r.ok) return json({ ok:false, stage:"api", status:r.status, error:data, sent:payload }, r.status);
    return json({ ok:true, data }, 200);
  } catch (err) {
    return json({ ok:false, stage:"exception", error:String(err) }, 500);
  }
};
