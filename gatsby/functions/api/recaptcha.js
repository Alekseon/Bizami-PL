const ALLOW_ORIGIN = "*"; // produkcyjnie ustaw konkretną domenę

function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": ALLOW_ORIGIN,
      ...extraHeaders,
    },
  });
}

function allow405() {
  return new Response(null, {
    status: 405,
    headers: {
      "Allow": "POST, OPTIONS",
      "Access-Control-Allow-Origin": ALLOW_ORIGIN,
    },
  });
}

export const onRequest = async (ctx) => {
  const { request } = ctx;
  const method = request.method.toUpperCase();

  if (method === "OPTIONS") return handleOptions(request);
  if (method === "POST")    return handlePost(ctx);

  return allow405();
};

async function handleOptions(request) {
  const reqHeaders = request.headers.get("Access-Control-Request-Headers") || "*";

  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": ALLOW_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": reqHeaders,
      "Access-Control-Max-Age": "86400",
      "Vary": "Access-Control-Request-Headers, Access-Control-Request-Method",
    },
  });
}

async function handlePost({ request, env }) {
  console.log("[recaptcha] POST hit");

  try {
    const body = await request.json().catch(() => ({}));
    const token = body?.token;

    if (!token) return json({ ok: false, message: "Brak tokenu reCAPTCHA w body (token)" }, 400);
    if (!env?.SECRET_KEY) return json({ ok: false, message: "Brak SECRET_KEY w env" }, 500);

    const form = new URLSearchParams();
    form.append("secret", env.SECRET_KEY);
    form.append("response", token);

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: form,
    });

    const data = await verifyRes.json();

    if (data?.success) return json({ ok: true, data }, 200);
    return json({ ok: false, message: "Błąd weryfikacji reCAPTCHA", data }, 400);
  } catch (err) {
    return json({ ok: false, message: "Unexpected error", error: String(err) }, 500);
  }
}
