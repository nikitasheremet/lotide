// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅ ${actual} === ${expected}` : `❌❌ ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 3);