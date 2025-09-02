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

  // --- ENV (tylko serwerowe, bez GATSBY_) ---
  const API_URL = ("https://api.smtpexpress.com/send").trim();
  const PROJECT_SECRET = (env.SMTPEXPRESS_PROJECT_SECRET || "").trim();
  const SENDER = (env.SMTPEXPRESS_SENDER_EMAIL || "").trim();
  const RCPT = (env.SMTPEXPRESS_RECIPIENTS_EMAIL || "").trim();
  const TEMPLATE_ID = (env.SMTPEXPRESS_TEMPLATE_ID || "").trim();

  const missing = [];
  if (!PROJECT_SECRET) missing.push("SMTPEXPRESS_PROJECT_SECRET");
  if (!SENDER) missing.push("SMTPEXPRESS_SENDER_EMAIL");
  if (!RCPT) missing.push("SMTPEXPRESS_RECIPIENTS_EMAIL");
  if (!TEMPLATE_ID) missing.push("SMTPEXPRESS_TEMPLATE_ID");
  if (missing.length) return json({ ok:false, stage:"env", message:"Brak zmiennych środowiskowych", missing }, 500);

  // diagnostyka (w logach Pages, nie wraca do klienta)
  console.log("[send-email] secret len:", PROJECT_SECRET.length, "tail:", PROJECT_SECRET.slice(-4));

  try {
    const body = await request.json().catch(() => ({}));

    const payload = {
      subject: "Kontakt Bizami",
      message: "<h1>Kontakt Bizami</h1>",
      sender: { name: "Bizami", email: SENDER },
      recipients: [{ name: "Recipient", email: RCPT }],
      template: {
        id: TEMPLATE_ID,
        variables: {
          name: body.username,
          email: body.email,
          phone: body.phone,
          company: body.company,
          magSize: body.itemCount,
          erp: body.erp,
          quantity: body.magCount,
        },
      },
    };

    const r = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // KLUCZ: autoryzacja Bearer z PROJECT SECRET
        "Authorization": `Bearer ${PROJECT_SECRET}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await r.json().catch(() => ({}));
    if (!r.ok) return json({ ok:false, stage:"api", status:r.status, error:data }, r.status);

    return json({ ok:true, data }, 200);
  } catch (err) {
    return json({ ok:false, stage:"exception", error:String(err) }, 500);
  }
};
