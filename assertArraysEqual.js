eqArrays = function(a, b){
  if (a instanceof Array && b instanceof Array) {
    if (a.length != b.length)  //ensuring correct length
    return false;
  for (let i =0; i< a.length; i++) //ensuring each element is equal
     if (!eqArrays(a[i], b[i]))
        return (false);
  return (true);

  }else {
    return a===b;
  }
}

assertArraysEqual = function (a, b){
if (eqArrays(a,b)){
  console.log("this array is true");
  
}else {
  console.log("this array is false");
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