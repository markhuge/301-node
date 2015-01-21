var http   = require('http'),
    env    = process.env,
    port   = env.port || 8080,
    proto  = env.REDIRECT_PROTOCOL || 'https',
    domain = env.REDIRECT_DOMAIN || '127.0.0.1';

http.createServer(handler).listen(port);

function handler (req, res) {
  var header = proto + '://' + domain + req.url
  console.log("redirecting to:", header);
  res.writeHead(301, { Location: header });
  res.end();
}
