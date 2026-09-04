export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status === 404) {
      const url = new URL(request.url);
      const notFoundPage = url.pathname.startsWith('/ja') ? '/ja/404.html' : '/404.html';
      const notFoundUrl = new URL(notFoundPage, request.url);
      const notFoundResponse = await env.ASSETS.fetch(new Request(notFoundUrl, request));
      if (notFoundResponse.status === 200) {
        return new Response(notFoundResponse.body, {
          status: 404,
          headers: notFoundResponse.headers,
        });
      }
    }
    return response;
  },
};
