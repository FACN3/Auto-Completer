var test = require('tape');

function add(a, b) {
  return a + b;
}

test('This test should return addition of 2 numbers', function(t) {
  t.equal(3, add(1, 2));
  t.end();
});
