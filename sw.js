onfetch = function(e) {
  if (e.request.url.indexOf("check") >= 0) {
    e.respondWith(new Response("517c06a67aaa919352bf16c6aee0872f16ac7968"));
  } else if (e.request.url.indexOf("reject") >= 0) {
    e.respondWith(Promise.reject("oops"));
  }
};
