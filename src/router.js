var {handleHome, handlePublic, handleSearch} = require('./handler');
var querystring = require('querystring');

function router(req, res) {
  var url = req.url;

  if (url === '/') {
    handleHome(req, res);
  }
  else if (url.split('?')[0] === '/search') {
    var query =  url.split('=')[1];
    console.log("url: " + url);
    console.log("query: " + query);
    handleSearch(req, res, query);
  }
  else {
    handlePublic(req, res);
  }
}

module.exports = router;
