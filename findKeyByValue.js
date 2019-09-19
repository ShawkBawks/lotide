const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return (`\u1F60A, \u1F60A, \u1F60A, Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`\u1F92C, \u1F92C, \u1F92C, Assertion failed: ${actual} !== ${expected}`);
  }
};

let findKeyByValue = function(sentence){

const results = {};

for (let value of results){
  console.log(value);
}

}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(Object.keys(bestTVShowsByGenre));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);