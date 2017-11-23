var fs = require('fs');
var file = __dirname + "/../famous_people.txt";
var small_file = __dirname + "/../small.txt";

function filterData (data, str) {

  var result = [];
  var limitResult = 0;

  for (i = 0; i < data.length; i++) {
    if (limitResult === 10) {
      console.log(1);
      break;
    } else {
        if (data[i].toLowerCase().indexOf(str.toLowerCase()) !== -1){
        limitResult += 1; //found result and we are adding it to our list of 10
        result.push(data[i]);
        }
      }
  }
  console.log(result);
  return result;
}

module.exports = filterData;
