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

const without = (source, itemsToRemove) => {
  return source.filter(item => !itemsToRemove.includes(item));
};

//Test

assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);