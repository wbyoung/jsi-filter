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

  it('works for people', function() {
    var people = ['adam', 'carlo', 'tian', 'ariel', 'grant', 'dmitry', 'sam', 'whitney', 'josh'];
    var beginsWithA = filter(people, function(name) {
      return (name.slice(0,1) === 'a');
    });
    expect(beginsWithA).to.eql([ 'adam', 'ariel' ]);
  });


  it('works with people', function() {
    var people = [
      { name: "Sam" },
      { name: "Carlo" },
      { name: "Adam" },
      { name: "Josh" }
    ];
    var friends = filter(people, function(person) {
      return person.name[0].toLowerCase() < 'n';
    });
    expect(friends).to.eql([
      { name: "Carlo" },
      { name: "Adam" },
      { name: "Josh" }
    ]);
  });

  it('finds big numbers', function() {
    var numbers = [10, 20, 100, 101, 389, 1];
    var big = filter(numbers, function(n) {
      return n > 100;
    });
    expect(big).to.eql([101, 389]);

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
