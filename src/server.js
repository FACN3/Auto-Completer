
var http = require('http');
var handler = require('./handler');

var port = 4000;

var server = http.createServer(handler);

server.listen(port);

console.log('Server is listening on PORT 4000...');

