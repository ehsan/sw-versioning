onfetch = function(e) {
  if (e.request.url.indexOf("beacon") >= 0) {
    var cache = c;
    event.respondWith(
      caches.open("beacon")
        .then(function(c) {
          cache = c;
          return cache.match("count");
        }).then(function(res) {
          if (res) {
            return res.text()
              .then(function(count) {
                count++;
                return cache.put("count", new Response(count));
              });
          } else {
            return cache.put("count", new Response("0"));
          }
        }).then(function() {
          // Note: A real beacon would probably let the request go to the network.
          return new Response("ack");
        })
    );
  }
};
