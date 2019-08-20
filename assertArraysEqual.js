const assertArraysEqual = (array1, array2) => {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`❌❌ ${array1} !== ${array2}`);
        return;
      }
    }
    console.log(`✅✅ ${array1} === ${array2}`);
  } else {
    console.log(`❌❌ ${array1} !== ${array2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);