const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`\u1F60A, \u1F60A, \u1F60A, Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`\u1F92C, \u1F92C, \u1F92C, Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newarray = array.slice(1);
  return newarray;

};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!