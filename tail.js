const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ ${actual} !== ${expected}`);
  }
};

const tail = (array) => {

  let newArray = array.splice(1);
  return newArray;

};

let output = tail([]);

assertEqual(output.length, 0);