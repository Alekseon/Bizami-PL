
export const onRequestGet: PagesFunction = async (ctx) => {
  return new Response("Hello from Pages Functions!", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
