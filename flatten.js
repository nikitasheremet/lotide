const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const flatten = (array) => {
  return array.flat(Infinity);
};

// Test

// assertArraysEqual(flatten([1, 2, [[3, 4], 5, [6]]]),[1, 2, 3, 4, 5, 6]);