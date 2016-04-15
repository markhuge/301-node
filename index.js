var http   = require('http');

module.exports = function (opts) {
  var opts = opts || {};
  var ip     = opts.ip     || '0.0.0.0',
      port   = opts.port   || 8080,
      code   = opts.code   || 301,
      health = opts.health || undefined,
      proto  = opts.proto  || 'http',
      domain = opts.domain || '127.0.0.1';

  target = proto + '://' + domain;
 
  console.log('Starting', code, 'redirect server...');
  http.createServer(handler).listen(port, ip);
  console.log('  Redirecting to:', target);
  console.log('  Listening on:  ', ip + ':' + port);

  if (health) {
    http.createServer(healthCheck).listen(health, ip);
    console.log('  HealthCheck on:', ip + ':' + health);
  }
  
  function handler (req, res) {
    var header = target + req.url
    console.log('redirecting to:', header);
    res.writeHead(code, { Location: header });
    res.end();
  }

  function healthCheck (req, res) { res.end(); }
}
