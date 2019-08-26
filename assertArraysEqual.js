const eqArrays = require("./eqArrays");

const assertArraysEqual = (actual, expected) => {
  console.log((actual === expected) ? `✅✅  ${actual} === ${expected}` : `❌❌  ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;