module.exports.filter = function (array, fn) {
  resultsArray = [];
    array.forEach(function(item) {
      if (fn(item)) {
        resultsArray.push(item);
      }
    });
  return resultsArray;
};
