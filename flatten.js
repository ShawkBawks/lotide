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

let flatten = function(arr){
  let arr2 = [arr];
  let flattened = [].concat.apply([], arr);
  
  return flattened;
}
 console.log(flatten([1, 2, [3, 4], 5, [6]]));

 module.exports = flatten;
