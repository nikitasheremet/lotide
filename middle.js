const middle = (array) => {
  let pos = Math.floor((array.length / 2));
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(pos - 1, pos + 1);
  } else if (array.length % 2 !== 0) {
    return array.slice(pos, pos + 1);
  }
};

module.exports = middle;

