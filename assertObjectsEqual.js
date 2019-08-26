const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  console.log(eqObjects(actual,expected) ? `✅✅  ${inspect(actual)} === ${inspect(expected)}` : `❌❌  ${inspect(actual)} !== ${inspewct(expected)}`);
};

module.exports = assertObjectsEqual;

let aa = { a: '1', b: 2 };
let bb = { b: 2, a: '1' };
assertObjectsEqual(aa,bb);