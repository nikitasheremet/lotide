const eqArrays = (array1, array2) => {
  output = true;
  array1.length === array2.length || (output = false)
  array1.forEach(element => {if (array2[array1.indexOf(element)] !== element) output =  false});
  return output;
};

const assertArraysEqual = (actual, expected) => {
  console.log(eqArrays(actual,expected) ? `✅✅  ${actual} === ${expected}` : `❌❌  ${actual} !== ${expected}`);
};

const letterPosition = (string) => {
  result = {};
  let uniqueSet = new Set (string.split(" ").join(""));
  uniqueSet.forEach(item => result[item] = occurences(item,string));
  return result;
};

function occurences(letter, string) {
  output = [];
  for (i in string) {
    if (letter === string[i]) output.push(Number(i))
  }
  return output;
}

assertArraysEqual(letterPosition("hello").e,[1]);