const eqArrays = (array1, array2) => {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
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

assertArraysEqual(flatten([1, 2, [3, 4,5,5], 5, [6]]),[1, 2, 3, 4, 5, 6]);