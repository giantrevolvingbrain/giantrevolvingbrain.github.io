var http = require('http');

var serveStatic = require('serve-static');

var serve = serveStatic("./");

var server = http.createServer(function(req, res) {
  serve(req, res);
});

server.listen(8000);

console.log("Point your browser to: http://localhost:8000")