var {handleHome, handlePublic, handleSearch} = require('./handler');

function router(req, res) {
  var url = req.url;

  if (url === '/') {
    handleHome(req, res);
  }
  else if (url === '/search') {
    handleSearch(req, res);
  }
  else {
    handlePublic(req, res);
  }
}

module.exports = router;
