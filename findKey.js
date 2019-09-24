const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`\u1F60A, \u1F60A, \u1F60A, Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`\u1F92C, \u1F92C, \u1F92C, Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  const keys = Object.keys(obj)
  // console.log(keys);
  // console.log(Object.values(obj))
  for (let key of keys){   //key = individual key / keys = full list of names
    // console.log('---',obj[key])
    if (callback(obj[key]) ){ //obj[key] is the object of the individual key in this case 'stars'
    return key;  //returns key once encountering stars 2 - being 'noma'
    }
  }
return undefined;
}

  



assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"    actual = x.stars === 2, noma being expected

module.exports = findKey;
