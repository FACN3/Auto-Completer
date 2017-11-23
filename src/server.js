
var http = require('http');
var router = require('./router');

var port = process.env.PORT || 4000;
var host = process.env.HOST || '127.0.0.1';

var server = http.createServer(router);

server.listen(port);

console.log('Server is listening on PORT ' + port);
