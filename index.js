module.exports.filter = function(array, fn) {
};

module.exports.map = function(array, fn) {
  var result = [];
  array.forEach(function(item) {
    result.push(fn(item));
  });
  return result;
};
