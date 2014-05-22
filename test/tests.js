var expect = require('chai').expect;
var filter = require('..').filter;

describe('filter()', function() {
  it('works for numbers', function() {
    var numbers = [1, 2, 3, 4, 5, 6];
    var even = filter(numbers, function(n) {
      return (n % 2) === 0;
    });
    expect(even).to.eql([2, 4, 6]);
  });
});
