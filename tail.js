const tail = (array) => {

  let newArray = array.splice(1);
  return newArray;

};

module.exports = tail;