const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// test cases

// assertObjectsEqual({ a: "1", b: "2" },{ a: "1", b: "2" }); // pass
// assertObjectsEqual({ c: "1", d: "2" },{ d: "2", c: "1" }); // pass
// assertObjectsEqual({ c: "1", d: "2", e: [1,2,3,4] },{ d: "2", c: "1" }); // fail

