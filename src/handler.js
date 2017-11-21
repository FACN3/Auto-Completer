var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
var filepath;

function handleError(err) {

}

function handler(req, res) {

  var url = req.url;
  console.log(url);

  if (url === '/') {
    //Display index.html
    filepath = path.join(__dirname, '..', 'public', 'index.html');

    fs.readFile(filepath, function(error, file) {
      if (error) {
        console.log(error);
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>FiLE NoT FouNd</h1>');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(file);
      }
    });
  }
  else if (url === '/search') {
    var data = [];
    filepath = path.join(__dirname, '..', 'small.txt');
    fs.readFile(filepath, function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      data = filepath.split('\n');
      console.log(data);
      res.end(file);
    });
  }
  else {
    // Load assets
    ext = url.split('.')[1];
    console.log(ext);

    var extTypes = {
      css: 'text/css',
      js: 'application/javascript',
      html: 'text/html',
      png: 'image/png'
    }

    filepath = path.join(__dirname, '..', 'public', url);

    fs.readFile(filepath, function(error, file) {
      if (error) {
        console.log(error);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('<h1>FiLE NoT FouNd</h1>');
        res.end();
      } else {
        res.writeHead(200, {'Content-Type': extTypes[ext]});
        res.end(file);
      }
    });
  }
}

module.exports = handler;
