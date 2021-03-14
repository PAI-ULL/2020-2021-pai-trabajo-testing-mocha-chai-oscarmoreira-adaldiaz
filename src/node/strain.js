const keep = (collection = [], predicate) => {
  let keepArray = collection.filter(element => predicate(element) == true);
  return keepArray;
};


const discard = (collection = [], predicate) => {
  let discardArray = collection.filter(element => predicate(element) == false);
  return discardArray;
};

module.exports = {keep, discard}