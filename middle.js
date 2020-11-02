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

module.exports = middle;