const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅ ${actual} === ${expected}` : `❌❌ ${actual} !== ${expected}`);
};

const eqArrays = (array1, array2) => {
  output = true;
  array1.length === array2.length || (output = false)
  array1.forEach(element => {if (array2[array1.indexOf(element)] !== element) output =  false});
  return output;
};

const eqObjects = (object1, object2) => {
  let output = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (key in object1) {
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key],object2[key]) === false) return false;
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }
  return output;
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false