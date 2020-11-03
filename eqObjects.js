const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

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

module.exports = eqObjects;


//test cases

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);
// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);