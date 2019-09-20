const eqArrays = function(a, b){
  if (a instanceof Array && b instanceof Array) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return false;
}


const assertArraysEqual = function (a, b){
if (a===b){
  console.log(`😁😁😁 Assertion passed! ${a} === ${b}`);
  
}else {
  console.log(`👺👺👺 Assertion failed! ${a} !== ${b}`);
}

}


const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["control", "ground", "to", "major", "tom"];
const days = ["Monday", "Tuesday", "Wednesday"];
const nums = [1, 2 ,3];
const nums2 = ["1","2","3"];



const map = (array, callback) => {
 const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  
  
  return results;
}



const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[0]);
// const results3 = map(days, day => day[2]);
assertArraysEqual(
  eqArrays(results1, results2), true
);
assertArraysEqual(eqArrays(words, words2),false);
assertArraysEqual(eqArrays(nums, nums2),false);