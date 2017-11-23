var base_url = '/search?q='

function sendRequest(url, callback) {
  var xhr = new XMLHttpRequest(url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.readyState, xhr.status);
      callback(JSON.parse(xhr.responseText));
    } else {
      console.log(xhr.readyState, xhr.status);
    }
  };

  xhr.open("GET", url);
  xhr.send();
}

function displayGiphy() {
  var query = document.getElementById('search').value;
  console.log(query);
  var gifRequest = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC";
  sendRequest(gifRequest, function(results) {
    console.log(results);
    var giphyObj = results;
    var gifDrop = document.querySelector(".gif");
    var link = giphyObj.data[1].images.downsized_medium.url;
    document.querySelector('.gif').setAttribute("alt", query);
    gifDrop.src = link;
  });
}

document.getElementById("search").addEventListener('keyup', function(event) {
  console.log(event.target.value);
  var searchTerm = event.target.value;
  var url = base_url + searchTerm;
  console.log(url);
  sendRequest(url, function(results) {
    console.log("Results#2: ", results);
    results.forEach(function(item) {
      var option = document.createElement('option');
      option.value = item.split(',')[1];
      document.getElementById('search--results').appendChild(option);
    });
  });
});

//https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_datalist
