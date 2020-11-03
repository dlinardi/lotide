const assertArraysEqual = require('./assertArraysEqual');

// actual function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// //test cases

// const words = ["ground", "control", "to", "major", "tom"];

// assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]); // pass
// assertArraysEqual(map(words, x => x.length),[ 6, 7, 2, 5, 3 ]); // pass