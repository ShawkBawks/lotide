const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return (`\u1F60A, \u1F60A, \u1F60A, Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`\u1F92C, \u1F92C, \u1F92C, Assertion failed: ${actual} !== ${expected}`);
  }
};

let quote = "Lighthouse Labs in the House of Light";
quote = quote.replace(/\s+/g, '');  //removes spaces from string
let countLetters = function (sentence) {
  const result = {};

  const letters = sentence.split('');
  for (let letter of letters) {
    letter = letter.toLowerCase();  //converts to lower case
    if (result[letter]) {
      result[letter] = result[letter] + 1; //if result is in the object it will add to total
    } else {
      result[letter] = 1; //if not in object it will add additional key
    }
  }
  return result;
};

const letterTotals = countLetters(quote);
console.log(letter);