// test assertion function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// actual function

const eqObjects = function(object1, object2) {
  // if both objects have the same amount of keys
  if (Object.keys(object1).length === Object.keys(object2).length) {

    // iterate through object1 keys array
    for (const val of Object.keys(object1)) {
      // check if there is a unique value in either array
      if (object1[val] !== object2[val]) {
        // if unique value is found
        return false;
      }
      // if all keys/values match
      return true;
    }
  }
  return false;
};


//test cases

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false


assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);