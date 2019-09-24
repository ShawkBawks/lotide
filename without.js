let eqArrays = function(a, b) {
  if (a instanceof Array && b instanceof Array) {
    if (a.length !== b.length)  //ensuring correct length
      return false;
    for (let i = 0; i < a.length; i++) //ensuring each element is equal
      if (!eqArrays(a[i], b[i]))
        return (false);
    return (true);

  } else {
    return a === b;
  }
};

let assertArraysEqual = function(a, b) {
  if (eqArrays(a,b)) {
    console.log("this array is true");
  
  } else {
    console.log("this array is false");
  }

};

const words = ["hello", "world", "lighthouse"];

let without = function(arr1, arr2) {
  
  let array3 = arr1.filter(function(obj) {
    return arr2.indexOf(obj) === -1;
  });
  return array3;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", 3], [1, 2, 3]));
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;