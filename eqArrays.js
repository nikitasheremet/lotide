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

module.exports = eqArrays;