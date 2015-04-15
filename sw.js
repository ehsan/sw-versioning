onfetch = function(e) {
  if (e.request.url.indexOf("check") >= 0) {
    e.respondWith(new Response("00141c6e116a2b98c8b973d9f14f35bba89b5919"));
  }
};
