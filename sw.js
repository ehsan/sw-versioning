onfetch = function(e) {
  dump("got " + e.request.url + "\n");
  if (e.request.url.indexOf("beaconEndpoint") >= 0) {
    e.respondWith(
      clients.matchAll()
        .then(function(clients) {
          dump("found " + client.length + " clients\n");
          clients.forEach(function(client) {
            client.postMessage({data: "beacon"});
            dump("message posted\n");
          });
          // Note: A real beacon would probably let the request go to the network.
          return new Response("ack");
        })
    );
    dump("respondWith\n");
  }
};
