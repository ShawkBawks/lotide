const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== (Object.keys(object2).length)) {  //check to ensure lengths match otherwise false
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) { //checks to see if object1 key contains array
      let isEqual = eqObjects(object1[key], object2[key]);  //checks to see if values are equal in keys
      if (!isEqual) {  //if not equal return false
        return false;
      }
    } else if (object1[key] != object2[key]) {  //if object keys do not match return false
      return false;
    }
  }
  return true;  //if all above parameters pass return true
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = (require('util').inspect);
  // console.log(`Example label: ${inspect(actual)}`);
 if (eqObjects(actual, expected)){
   console.log(`😁😁😁 Assertion passed! ${inspect(actual)} === ${inspect(expected)}`);

 } else {
   console.log(`👺👺👺 Assertion failed! ${inspect(actual)} !== ${inspect(expected)}`);
 }
};

const ab  = { a: "5",      b: [2, 5]};
const ba  = { b: [2, 5],   a: "5"};
assertObjectsEqual(ab, ba);


// eqArrays = function(a, b){
//   if (a instanceof Array && b instanceof Array) {
//     if (a.length != b.length)  //ensuring correct length
//     return false;
//   for (let i =0; i< a.length; i++) //ensuring each element is equal
//      if (!eqArrays(a[i], b[i]))
//         return (false);
//   return (true);

//   }else {
//     return a===b;
//   }
// };