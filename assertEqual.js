const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`\u1F60A, \u1F60A, \u1F60A, Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`\u1F92C, \u1F92C, \u1F92C, Assertion failed: ${actual} !== ${expected}`);
  }
};




module.exports= assertEqual;