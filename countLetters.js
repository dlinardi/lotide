const assertEqual = require('./assertEqual');

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

  return result;
};

module.exports = countLetters;

// const result1 = countLetters("LHL");

// assertEqual(result1["L"], 2);
// assertEqual(result1["H"], 1);
// assertEqual(result1["Z"], undefined);