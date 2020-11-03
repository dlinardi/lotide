const flatten = function(array) { 
  let results = [];
  for (let i of array) {
    if (Array.isArray(i)) {
      for (let j of i) {
        results.push(j);
      }
    } else {
      results.push(i);
    }
  }
  return results;
}; 

module.exports = flatten;