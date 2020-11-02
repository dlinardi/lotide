const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 5, 6, 10], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([4, 5, 6, 7], [4, 5, 6, 7]), true); // => should PASS
assertEqual(eqArrays(['dave', 'carol'], ['dave', 'carol']), true); // => should PASS