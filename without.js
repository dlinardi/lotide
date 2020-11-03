const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    const index = itemsToRemove.indexOf(source[i]);
    if (index === -1) {
      newArray.push(source[i]);
    }
  }
  
  return newArray;
};

module.exports = without;

// // test cases

// assertArraysEqual(without([1, 2, 3], [1]),[2,3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);