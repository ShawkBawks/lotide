const eqArrays = require (`./eqArrays`)
const assertArraysEqual = require (`./assertArraysEqual`);

middle = function(arr){
  if (arr.length === 1 || arr.length === 2){
  return [];
}else if (arr.length % 2 !== 0){
     let mids = (arr.length / 2 )
     let center = Math.floor(mids);
     return [arr[center]];
} else {
  let evenMid = (arr.length / 2)
  let evenMid2 = (arr.length / 2 + 1)
  let evenCenter = [];
  evenCenter.push(evenMid, evenMid2);
  return evenCenter;
}
}
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2,]));
console.log(middle([1, 2, 3]));