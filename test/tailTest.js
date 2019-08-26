const tail = require("../tail");
const chai = require("chai")
const assert = chai.assert;

describe("#tail", function() {

  it ("returns empty array when passed empty array", function() {
    let arr = [];
    result = tail(arr);
    assert.deepEqual(result,[]);
  })
  it ("returns array without first value when passed array", function() {
    let arr = [1,2,3];
    result = tail(arr);
    assert.deepEqual(result,[2,3]);
  })
});