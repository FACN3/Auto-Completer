var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
var filepath;

function handleError(err, res) {
  console.log(err);
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.end('<h1>FiLE NoT FouNd</h1>');
}

// function handler(req, res) {
//
//   var url = req.url;
//   console.log(url);
//
//   if (url === '/') {
//     //Display index.html
//     filepath = path.join(__dirname, '..', 'Public', 'index.html');
//
//     fs.readFile(filepath, function(error, file) {
//       if (error) {
//         handleError(error);
//       } else {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end(file);
//       }
//     });
//   }
//   else if (url === '/search') {
//     var data = [];
//     filepath = path.join(__dirname, '..', 'small.txt');
//     fs.readFile(filepath, function(error, file) {
//       if (error) {
//         handleError(error);
//       }
//       data = filepath.split('\n');
//       console.log(data);
//       //res.end(file);
//       request.on('end', function(str) {
//         response.end(filterData(data, str));
//       });
//     });
//   }
//   else {
    // Load assets
  //   ext = url.split('.')[1];
  //   console.log(ext);
  //
  //   var extTypes = {
  //     css: 'text/css',
  //     js: 'application/javascript',
  //     html: 'text/html',
  //     png: 'image/png'
  //   }
  //
  //   filepath = path.join(__dirname, '..', 'Public', url);
  //
  //   fs.readFile(filepath, function(error, file) {
  //     if (error) {
  //       handleError(error);
  //     } else {
  //       res.writeHead(200, {'Content-Type': extTypes[ext]});
  //       res.end(file);
  //     }
  //   });
  // }
// }

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

function handleSearch(req, res) {
    var data = [];
    filepath = path.join(__dirname, '..', 'small.txt');
    fs.readFile(filepath, function(error, file) {
      if (error) {
        handleError(error, res);
      }
      data = filepath.split('\n');
      console.log(data);
      //res.end(file);
      req.on('end', function(str) {
        console.log(filterData(data, str));
        res.end(filterData(data, str));
      });
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
    png: 'image/png'
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
