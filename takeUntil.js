// testing assertion functions
const eqArrays = function(arr1,arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// actual function
const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};

//test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]); // pass
assertArraysEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]); // pass
