var fs = require('fs');
var path = require('path');
var querystring = require('querystring');


function handler(req, res) {
  var url = req.url;
  console.log(url);

  if (url === '/') {
    //display index.html
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("This is HOME");
    res.end();
  }
  else if (url === '/search') {
    // filter and load data into page
  }
  else {
    // load assets
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write("File not found.");
    res.end();
  }
}

module.exports = handler;
