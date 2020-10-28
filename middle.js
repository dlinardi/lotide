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

const middle = function(array) {
  let newArray = [];
  let arrayHalf = array.length / 2;

  // for array with 1/2 elements, (no middle) therefore return empty array
  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 === 0) {
    // if array is even, returns 2 middle elements
    newArray.push(array[(arrayHalf - 1)]);
    newArray.push(array[arrayHalf]);
  } else {
    // if array is odd, returns 1 middle element
    newArray.push(array[Math.floor(arrayHalf)]);
  }

  return newArray;
};

// test cases

assertArraysEqual(middle([1,2,3,4,5]), [3]); // pass
assertArraysEqual(middle([1,2,3,4]), [2,3]); // pass
assertArraysEqual(middle(['dave','carol']), []); // fail
assertArraysEqual(middle(['this','is','a','test']), ['is','a']); // pass
