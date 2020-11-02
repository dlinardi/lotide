const assertEqual = require('../assertEqual');
const tail = require('../tail');

let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


result = tail([1,2,3,4,5,6,7,8]);
assertEqual(result.length, 7); // ensure we get back 7 elements
assertEqual(result[0], 2); // ensure first element is 2
assertEqual(result[6], 8); // ensure seventh element is 8

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!