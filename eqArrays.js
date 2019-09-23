const assertEqual = require (`./assertEqual`);


const eqArrays = function(a, b){
  if (a instanceof Array && b instanceof Array) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  return false;
}

module.exports = eqArrays;