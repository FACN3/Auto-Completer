document.getElementById("search").addEventListener("change", search);

function search(url, callback) {
  var xhr = new XMLHttpRequest(url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(JSON.parse(xhr.responseText));
    } else {
      console.log(xhr.readyState, xhr.status);
      return "Sorry, there was an error.";
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}

//https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_datalist
