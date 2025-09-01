export const onRequestGet = async (ctx) => {
  return new Response("Hello from email.js", {
    headers: { "Content-Type": "text/plain" },
  });
};
