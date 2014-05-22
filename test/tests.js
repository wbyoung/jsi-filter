var expect = require('chai').expect;
var filter = require('../index');
var map = require('..').map;

describe('filter()', function() {
  it('works for numbers', function() {
    var numbers = [1, 2, 3, 4, 5, 6];
    var even = filter.filter(numbers, function(n) {
      return (n % 2) === 0;
    });
    expect(even).to.eql([2, 4, 6]);
  });

  it('works for people', function() {
    var people = ['adam', 'carlo', 'tian', 'ariel', 'grant', 'dmitry', 'sam', 'whitney', 'josh'];
    var beginsWithA = filter.filter(people, function(name) {
      return (name.slice(0,1) === 'a');
    });
    expect(beginsWithA).to.eql([ 'adam', 'ariel' ]);
  });
});

/**
  * I am not using this function so I am commenting out the test:

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

*/
