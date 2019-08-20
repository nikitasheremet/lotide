const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅ ${actual} === ${expected}` : `❌❌ ${actual} !== ${expected}`);
};

const head = (array) => {
  return array[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");