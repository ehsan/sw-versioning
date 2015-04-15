onfetch = function(e) {
  if (e.request.url.indexOf("check") >= 0) {
    e.respondWith(new Response("ccc79b8887e7553c36b4d8d39b242682f0860d0f"));
  }
};
