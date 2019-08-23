const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅ ${actual} === ${expected}` : `❌❌ ${actual} !== ${expected}`);
};

const eqArrays = (array1, array2) => {
  output = true;
  array1.length === array2.length || (output = false)
  array1.
    forEach((element,index) => {
      if (Array.isArray(element)) {
        output = eqArrays(element, array2[index]);
      } else {
        if (array2[index] !== element) output =  false
      }
    });
  return output;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false