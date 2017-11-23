var base_url = '/search?q='
//var query = document.getElementById("search").value;

function sendRequest(url, callback) {
  var xhr = new XMLHttpRequest(url);
  xhr.onreadystatechange = function() {
      //console.log(xhr.readyState, xhr.status);
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

document.getElementById("search").addEventListener('keyup', function(event) {
  console.log(event.target.value);
  var searchTerm = event.target.value;
  var url = base_url + searchTerm;
  console.log(url);
  sendRequest(url, function(result) {
    console.log("Result#2: ", result);
    document.querySelector('.suggestresults').textContent = result
    if (searchTerm === "") {
      document.querySelector('.suggestresults').textContent = "";
    }
  });
});



//https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_datalist
