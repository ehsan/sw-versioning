onfetch = function(e) {
  if (e.request.url.indexOf("check") >= 0) {
    e.respondWith(new Response("5822ab74871a12492756519d733b7bff9fbc3575"));
  }
};
