// test assertion functions

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

// test cases

const results1 = letterPositions('hello');

assertArraysEqual(results1['h'],[0]);
assertArraysEqual(results1['e'],[1]);
assertArraysEqual(results1['l'],[2,3]);
assertArraysEqual(results1['o'],[4]);