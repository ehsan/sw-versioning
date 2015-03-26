onfetch = function(e) {
  if (e.request.url.indexOf("beaconEndpoint") >= 0) {
    e.respondWith(
      clients.matchAll()
        .then(function(clients) {
          clients.forEach(function(client) {
            client.postMessage({data: "beacon"});
          });
          // Note: A real beacon would probably let the request go to the network.
          return new Response("ack");
        })
    );
  }
};
