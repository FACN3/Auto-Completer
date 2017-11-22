
var http = require('http');
var router = require('./router');

var port = process.env.PORT || 4000;

var server = http.createServer(router);

server.listen(port);

console.log('Server is listening on PORT 4000...');
