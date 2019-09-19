eqArrays = function (a, b) {
  if (a instanceof Array && b instanceof Array) {
    if (a.length != b.length)  //ensuring correct length
      return false;
    for (let i = 0; i < a.length; i++) //ensuring each element is equal
      if (!eqArrays(a[i], b[i]))
        return (false);
    return (true);

  } else {
    return a === b;
  }
}

assertArraysEqual = function (a, b) {
  if (eqArrays(a, b)) {
    console.log("this array is true");

  } else {
    console.log("this array is false");
  }

}



const letterPositions = function (sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};



console.log(letterPositions("Hello"));
console.log(letterPositions("Tomato Potato"));
