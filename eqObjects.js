const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return (`😁😁😁Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`👺👺👺Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (a, b) {
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
};


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length != (Object.keys(object2).length)) {  //check to ensure lengths match otherwise false
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) { //checks to see if object1 key contains array
      let isEqual = eqArrays(object1[key], object2[key]);  //checks to see if values are equal in keys
      if (!isEqual) {  //if not equal return false
        return false;
      }
    } else if (object1[key] !== object2[key]) {  //if object keys do not match return false
      return false;
    }
  }
  return true;  //if all above parameters pass return true
};

const ab  = { a: "5",      b: [2, 6]};
const ba  = { b: [2, 5],   a: "5"};
const abc = { a: 5,        b: 2,    c: "1"};
const cab = { c: 1,        a: "5",  b: "5"};
const cd  = { c: "1",      d: ["2", 3] };
const dc  = { d: ["2", 3], c: "1" };
const cd2 = { c: "1",      d: ["2", 3, 4] };
console.log(eqArrays(eqObjects(cd, dc), true));
console.log(eqArrays(eqObjects(ab, ba), false));
console.log(eqArrays(eqObjects(cab, abc), false));
console.log(eqArrays(eqObjects(ba, cd), false));
console.log(eqArrays(eqObjects(cd, cd2), false));

module.exports = eqObjects;