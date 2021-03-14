//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const prime = (num) => {
  if (num === 0) {
    throw new Error('there is no zeroth prime');
  }
  let counter = 0;
  let isDivisible;
  for (let numerator = 2; numerator < Infinity; numerator++) {
    isDivisible = false;
    for (let dividend = 2; dividend < numerator; dividend++) {
      if (numerator % dividend === 0) {
        isDivisible = true;
      }
    }
    if (!isDivisible) {
      counter += 1;
    }
    if (counter === num) {
      return numerator;
    }
  }
};

module.exports = {prime};