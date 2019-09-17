const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`\u1F60A, \u1F60A, \u1F60A, Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`\u1F92C, \u1F92C, \u1F92C, Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  for (let i = 0; i < array.length; i++)
  return array[0];

}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]) , undefined);

