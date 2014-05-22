var expect = require('chai').expect;
var filter = require('..').filter;
var map = require('..').map;

describe('filter()', function() {
  it('works for numbers', function() {
    var numbers = [1, 2, 3, 4, 5, 6];
    var even = filter(numbers, function(n) {
      return (n % 2) === 0;
    });
    expect(even).to.eql([2, 4, 6]);
  });
});

describe('map()', function() {
  it('works for people', function() {
    var people = [
      { name: "Sam" },
      { name: "Carlo" },
      { name: "Adam" },
      { name: "Josh" }
    ];

    var names = map(people, function(person) {
      return person.name;
    });

    expect(names).to.eql(['Sam', 'Carlo', 'Adam', 'Josh']);
  });
});
