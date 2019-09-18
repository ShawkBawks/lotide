const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`\u1F60A, \u1F60A, \u1F60A, Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`\u1F92C, \u1F92C, \u1F92C, Assertion failed: ${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Light", "Light");
// assertEqual(1, 5);

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
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); // => false

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => false


// function arraysEqual(a,b) {
//   /*
//       Array-aware equality checker:
//       Returns whether arguments a and b are == to each other;
//       however if they are equal-lengthed arrays, returns whether their 
//       elements are pairwise == to each other recursively under this
//       definition.
//   */
//   if (a instanceof Array && b instanceof Array) {
//       if (a.length!=b.length)  // assert same length
//           return false;
//       for(var i=0; i<a.length; i++)  // assert each element equal
//           if (!arraysEqual(a[i],b[i]))
//               return false;
//       return true;
//   } else {
//       return a==b;  // if not both arrays, should be the same
//   }
// }


