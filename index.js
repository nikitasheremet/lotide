const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArrayEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetter = require("./countLetters");
const countOnly = require("./countOnly");
const eqObjects = require("./eqObjects")

module.exports = {
  head,
  tail,
  middle,
  assertArrayEqual,
  assertEqual,
  assertObjectsEqual,
  countLetter,
  countOnly,
  eqObjects
};