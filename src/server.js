
var http = require('http');
//module that allows us to create the server
var db = require('../small.json');
// access our test db
var path = require('path');
// requires the path to access the information
var server = http.createServer();
// creat the server
var port = 4000
//assign the port - ensure that "start": "node src/server.js" is in package json
var fs = require('fs');
// our File-Ststem
server.listen(port);

console.log('Server is running on PORT ' + port)
console.log(db);
