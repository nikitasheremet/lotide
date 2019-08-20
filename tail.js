const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅ ${actual} === ${expected}` : `❌❌ ${actual} !== ${expected}`);
};

const tail = (array) => {

  let newArray = array.splice(1);
  return newArray;

};

let output = tail([]);

assertEqual(output.length, 0);