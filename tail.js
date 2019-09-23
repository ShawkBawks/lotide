const assertEqual = require (`./assertEqual`);

const tail = function(array) {
  let newarray = array.slice(1);
  return newarray;

};
module.exports = tail;