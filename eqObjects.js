const eqArrays = require("./eqArrays");

const eqObjects = (object1, object2) => {
  let output = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let key in object1) {
    if (typeof object1[key] === "object" ) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key],object2[key])) return false;
      } else {
        return eqObjects(object1[key],object2[key]);
      }
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }
  return output;
};

module.exports = eqObjects;


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
