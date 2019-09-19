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
if (eqArrays(a === b)){
  console.log(`😁😁😁 Assertion passed! ${a} === ${b}`);
  
}else {
  console.log(`👺👺👺 Assertion failed! ${a} !== ${b}`);
}

}



const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
 const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  
  
  return results;
}



const results1 = map(words, word => word[0]);
const results2 = ['g', 'c', 't', 'm', 't',];
eqArrays(assertArraysEqual(results1 ), false);