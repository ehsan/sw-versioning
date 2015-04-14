onfetch = function(e) {
  if (e.request.url.indexOf("check") >= 0) {
    e.respondWith(new Response("be31fd43922612d8635ba17468d9f89a1db64a6a"));
  }
};
