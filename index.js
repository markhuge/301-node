var http   = require('http');

module.exports = function (opts) {
  var opts = opts || {};
  var proto  = opts.proto || 'http',
      port   = opts.port || 8080,
      domain = opts.domain || '127.0.0.1';
  http.createServer(handler).listen(port);
  console.log("Starting redirect server on", port);

  function handler (req, res) {
    var header = proto + '://' + domain + req.url
    console.log("redirecting to:", header);
    res.writeHead(301, { Location: header });
    res.end();
  }
}
