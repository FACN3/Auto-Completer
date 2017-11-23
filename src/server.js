var spawn = require('child_process').spawn;
var http = require('http');
var router = require('./router');

var host = process.env.HOST || 'localhost';
var port = process.env.PORT || 4000;

var server = http.createServer(router);

function listen(port, host) {
  //Don't need try/catch here as this is an asynchronous call
  server.listen(port, host, function(error) {
    if (error) {
      console.error("Unable to listen on port", port, error);
      //listen(port + 1);
      return;
    }
    console.log("Server running on port " + port);
    spawn("open", [host + port + "/"]);
  });
}

listen(port, host);
