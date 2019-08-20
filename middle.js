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

const assertArraysEqual = (actual, expected) => {
  console.log(eqArrays(actual,expected) ? `✅✅  ${actual} === ${expected}` : `❌❌  ${actual} !== ${expected}`);
};

const middle = (array) => {
  let pos = Math.floor((array.length / 2));
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(pos - 1, pos + 1);
  } else if (array.length % 2 !== 0) {
    return array.slice(pos, pos + 1);
  }
};

//Test
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);

