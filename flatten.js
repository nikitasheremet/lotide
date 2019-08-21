const eqArrays = (array1, array2) => {
  output = true;
  array1.length === array2.length || (output = false)
  array1.forEach(element => {if (array2[array1.indexOf(element)] !== element) output =  false});
  return output;
};

const assertArraysEqual = (actual, expected) => {
  console.log(eqArrays(actual,expected) ? `✅✅  ${actual} === ${expected}` : `❌❌  ${actual} !== ${expected}`);
};

const flatten = (array) => {
  newArray = [];
  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (a = 0; a < array[i].length; a++) {
        newArray.push(array[i][a]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// Test

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);