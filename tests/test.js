var test = require('tape');
var filterData = require('../src/helpers');
var path = require('path');
var data = ["About", "Bounty", "Castle"];

//---------Testing tape and tap-spec --------//
function add(a, b) {
  return a + b;
}

test('This test should return addition of 2 numbers', function(t) {
  t.equal(3, add(1, 2));
  t.end();
});
//-----------------------------------------//

test('This test should return and array of strings containing the given string', function(t) {
  var actual = filterData(data, "ou");
  var expected = ["About", "Bounty"];
  t.deepEqual(actual, expected);
  console.log(actual + " " + expected);
  t.end();
});

test('This test should return an empty array if the string is not found', function(t) {
  var actual = filterData(data, "zzzzzzz");
  var expected = [];
  t.deepEqual(actual, expected);
  console.log(actual + " " + expected);
  t.end();
});
