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

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  console.log(eqObjects(actual,expected) ? `✅✅  ${inspect(actual)} === ${inspect(expected)}` : `❌❌  ${inspect(actual)} !== ${inspewct(expected)}`);
};


let aa = { a: '1', b: 2 };
let bb = { b: 2, a: '1' };
assertObjectsEqual(aa,bb);