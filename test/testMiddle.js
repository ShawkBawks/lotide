// const assertArrayEqual = require(`../assertArraysEqual`);
// const middle = require(`../middle`);



// assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArrayEqual(middle([1, 2,]), ['[]']);
// assertArrayEqual(middle([1, 2, 3]), [2]);


const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), ['[]']);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), ['[]']);
  });

});