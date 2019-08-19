const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ ${actual} !== ${expected}`);
  }
};

const head = (array) => {
  let newArray = Object.assign({},array);
  for (let prop in newArray) {
    return newArray[prop];
  }
};

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");