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
  for (a = 0; a < itemsToRemove.length; a++) {  
    for (i = 0; i < source.length; i++) {
      if (source[i] === itemsToRemove[a]) {
        source.splice(i,1);
        i--;
      }
    }
  } 
  return source;
};

//Test

assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);