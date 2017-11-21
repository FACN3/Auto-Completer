var test = require('tape');
var filterData = require('./helpers');

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
  t.equal(["About", "Bounty"], filterData("ou"));
  t.deepEqual(["About", "Bounty"], filterData("ou"));
  t.end();
});

test('This test should return an empty array if the string is not found', function(t) {
  t.equal([], filterData("zzzzzzz"));
  t.deepEqual([], filterData("zzzzzzz"));
  t.end();
});
