const eqArrays = (array1, array2) => {
  let output = true;
  array1.length === array2.length || (output = false);
  array1.forEach(element => {
    if (array2[array1.indexOf(element)] !== element) output =  false;
  });
  return output;
};

const assertArraysEqual = (actual, expected) => {
  console.log(eqArrays(actual,expected) ? `✅✅  ${actual} === ${expected}` : `❌❌  ${actual} !== ${expected}`);
};

const words = ["ground", "control", "to", "major", "tom"];
const words2 = [];

const map = (array, callback) => {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = words.map(word => word);
const results3 = words2.map(word => word[0]);
// console.log(results1);

assertArraysEqual(results1, ["g","c","t","m","t"]);
assertArraysEqual(results2, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(results3, []);