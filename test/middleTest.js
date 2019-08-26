const middle = require("../middle");
const chai = require("chai")
const assert = chai.assert;

describe("#middle", function() {

  it ("returns empty array when passed array with 1 value", function() {
    let arr = [1];
    result = middle(arr);
    assert.deepEqual(result,[]);
  })
  it ("returns array with 1 value when passed array with odd number of values", function() {
    let arr = [1,2,3];
    result = middle(arr);
    assert.deepEqual(result,[2]);
  })
  it ("returns array with 2 values when passed array with even number of values", function() {
    let arr = [1,2,3,4];
    result = middle(arr);
    assert.deepEqual(result,[2,3]);
  })
});