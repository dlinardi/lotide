// test assertion function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// actual function

const countLetters = function(string) {
  const strArray = string.split('');
  const result = {};

  for (const char of strArray) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  console.log(result);
  return result;
};

// test cases

const result1 = countLetters("LHL");

assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);
assertEqual(result1["Z"], undefined);