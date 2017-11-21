var fs = require('fs');
var path = require('path');
var queryString = require ('queryString');
var db = require ('../small.js');

function handler(req, res){
  var url = req.url;
  console.log(url);

  if (url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("This is Home");
    res.end();

  } else {

    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write("File Not Found");
    res.end();
      }
}

module.exports = handler;
