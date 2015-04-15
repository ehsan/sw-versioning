onfetch = function(e) {
  if (e.request.url.indexOf("check") >= 0) {
    e.respondWith(new Response("417695799998d74997e8492d56b43d3dd1f5169d"));
  }
};
