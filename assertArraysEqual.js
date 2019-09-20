const eqArrays = function(a, b){
  if (a instanceof Array && b instanceof Array) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  return false;
}

assertArraysEqual = function (a, b){
if (eqArrays(a === b)){
  console.log(`😁😁😁 Assertion passed! ${a} === ${b}`);
  
}else {
  console.log(`👺👺👺 Assertion failed! ${a} !== ${b}`);
}

}

assertArraysEqual(['1', '2'], ['1', '3']);


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return (`\u1F60A, \u1F60A, \u1F60A, Assertion Passed:  ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     return (`\u1F92C, \u1F92C, \u1F92C, Assertion failed: ${actual} !== ${expected}`);
//   }
// };