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

  try {
    const body = await request.json();

    const payload = {
      subject: "Kontakt Bizami",
      message: "<h1>Kontakt Bizami</h1>",
      sender: { name: "AB Digital Enterprises", email: 'bizamipl-4c0d3c@smtpexpress.email' },
      recipients: [{ name: "Recipient", email: 'a.sobanska@alekseon.com' }],
      template: {
        id: 'HtMAwRLrWKf_58z26OJcW',
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

    const r = await fetch('https://api.smtpexpress.com/send', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Project-Id": 'sm0pid-idkdvHO86_jIiAZrNLXyZmOC6',
        "X-Project-Secret": '371570c4585e79c008b60f8544fbd3d01d02f0726418b61631',
      },
      body: JSON.stringify(payload),
    });

    const data = await r.json().catch(() => ({}));
    if (!r.ok) return json({ ok: false, status: r.status, error: data }, r.status);

    return json({ ok: true, data }, 200);
  } catch (err) {
    return json({ ok: false, error: String(err) }, 500);
  }
};
