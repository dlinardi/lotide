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
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


//test cases

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]); // pass
assertArraysEqual(map(words, x => x.length),[ 6, 7, 2, 5, 3 ]); // pass