var fs = require('fs');
var path = require('path');
var filterData = require('./helpers')
var querystring = require('querystring');
var filepath;

function handleError(err, res) {
  console.log(err);
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.end('<h1>FiLE NoT FouNd</h1>');
}

function handleHome(req, res) {
  filepath = path.join(__dirname, '..', 'Public', 'index.html');

    fs.readFile(filepath, function(error, file) {
      if (error) {
        handleError(error, res);
      } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(file);
      }
    });
}

function handleSearch(req, res, str) {
    var words = [];
    filepath = path.join(__dirname, '..', 'famous_people.txt');
    fs.readFile(filepath, function(error, file) {
      if (error) {
        handleError(error, res);
      }
      words = file.toString('utf-8').split('\n');
      console.log(words);
      var results = filterData(words, str);
      console.log(results);
      res.end(JSON.stringify(results));
  });
}


function handlePublic(req, res) {
  // Load assets
  var url = req.url;
  ext = url.split('.')[1];

  var extTypes = {
    css: 'text/css',
    js: 'application/javascript',
    html: 'text/html',
    png: 'image/png',
    ico: 'image/x-icon'
  }

  filepath = path.join(__dirname, '..', 'Public', url);

  fs.readFile(filepath, function(error, file) {
    if (error) {
      handleError(error, res);
    } else {
      res.writeHead(200, {'Content-Type': extTypes[ext]});
      res.end(file);
    }
  });
}


module.exports = {
  handleHome, handlePublic, handleSearch
}
