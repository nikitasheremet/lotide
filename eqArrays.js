const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅ ${actual} === ${expected}` : `❌❌ ${actual} !== ${expected}`);
};

const eqArrays = (array1, array2) => {
  output = true;
  array1.length === array2.length || (output = false)
  array1.forEach(element => {if (array2[array1.indexOf(element)] !== element) output =  false});
  return output;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);