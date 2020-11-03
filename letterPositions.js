const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  const strArray = sentence.split('');

  for (let i = 0; i < strArray.length; i++) {
    let char = strArray[i];
    if (!results[char]) {
      results[char] = [];
    }

    results[char].push(i);
  }

  return results;
};

module.exports = letterPositions;

// // test cases

// const results1 = letterPositions('hello');

// assertArraysEqual(results1['h'],[0]);
// assertArraysEqual(results1['e'],[1]);
// assertArraysEqual(results1['l'],[2,3]);
// assertArraysEqual(results1['o'],[4]);