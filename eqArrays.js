const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅ ${actual} === ${expected}` : `❌❌ ${actual} !== ${expected}`);
};

const eqArrays = (array1, array2) => {
  output = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      output = array1[i] !== array2[i] ? false : true;
      }
    } else {
    output = false;
  }
  return output;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);