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


const takeUntil = function(array, callback) {
  const results = [];
  for (let num  of array){
    if (callback(num)) {
      return results;
    }

    results.push(num)
  }

  return results;
    
  }


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);