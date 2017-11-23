var spawn = require('child_process').spawn;
var http = require('http');
var router = require('./router');

var host = process.env.HOST || 'localhost';
var port = process.env.PORT || 4000;

var server = http.createServer(router);

server.listen(port, function() {
  console.log("Server is listening on PORT ", port);
});
