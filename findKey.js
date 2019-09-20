const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`\u1F60A, \u1F60A, \u1F60A, Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`\u1F92C, \u1F92C, \u1F92C, Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKey = (arr, callback) => {
 const results = Object.keys(arr);
  for (let value of arr){
    if (obj[key] === value){
      return value
    }
   
 }  

 return results;
}


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

