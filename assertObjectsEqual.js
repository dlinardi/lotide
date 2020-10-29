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

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  // if both objects have the same amount of keys
  if (obj1Keys.length === obj2Keys.length) {
    // iterate through object1 keys array
    for (const key of obj1Keys) {
      // check if value of any keys are arrays
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return (eqArrays(object1[key],object2[key]));
      } else {
        // check if there is a unique value in either array
        if (object1[key] !== object2[key]) {
          // if unique value is found
          return false;
        }
      }
      
    }
    return true;
  }
  return false;
};

// function implementation

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// test cases

assertObjectsEqual({ a: "1", b: "2" },{ a: "1", b: "2" }); // pass
assertObjectsEqual({ c: "1", d: "2" },{ d: "2", c: "1" }); // pass
assertObjectsEqual({ c: "1", d: "2", e: [1,2,3,4] },{ d: "2", c: "1" }); // fail

