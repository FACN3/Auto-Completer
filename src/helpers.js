
// Read file and store it in array. error-first
var fs = require('fs');

fs.readFile(__dirname + "/../famous_people.txt",(err, data) => {
  if (err) console.log(err);
  console.log(data.toString('utf-8'));
  //.toString('utf-8') - was throwing an error before as console.log(data) - this solved it:
  // https://docs.nodejitsu.com/articles/advanced/buffers/how-to-use-buffers/
  filterData(data, "AB");
});

// filterData takes in the names of famous people and the user input
// takes in a string of what user has entered

function filterData (data, str ) {

  var result = [];
  var limitResult = 0;

  for (i = 0; i < data.length; i++) {
    if (limitResult = 10) {break;
  } else {
    if (data[i].toLowerCase().indexOf(str.toLowerCase())){
      limitResult += 1; //found result and we are adding it to our list of 10
      result.push(data[i]);
    }
  }
  console.log(result);
  return result;
}
//Iterate over the array and filter from the given string


}

//Read file and store it in array.

//Iterate over the array and filter from the given string.
