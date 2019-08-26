const assertEqual = require("../assertEqual.js");
const head = require("../head");
const chai = require("chai")
const assert = chai.assert

describe("#head", function() {

  it ("returns first value when passed array of numbers", function() {
    let arr = [5,6,7];
    result = head(arr);
    assert.strictEqual(result,5);
  })
  it ("returns first value when passed array of strings", function() {
    let arr = ["Hello", "Lighthouse", "Labs"];
    result = head(arr);
    assert.strictEqual(result,"Hello");
  })
  it ("returns undefined when passed empty array", function() {
    let arr = [];
    result = head(arr);
    assert.strictEqual(result, undefined);
  })
  it("returns '5' for ['5']", function() {
    let arr = ['5']
    result = head(arr);
    assert.strictEqual(result, '5'); 
  });
});