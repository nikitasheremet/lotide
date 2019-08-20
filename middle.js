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
  if (eqArrays(actual,expected)) {
    console.log(`✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ ${actual} !== ${expected}`);
  }
};

const middle = (array) => {
  let pos = Math.floor((array.length / 2));
  console.log(pos);
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

