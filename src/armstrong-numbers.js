//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isArmstrongNumber = (num) => {
  let number  = num.toString();
  let exponent = num.toString().length;
  let sum = 0;
  for (let i = 0; i < exponent; i++) {
    sum += Math.pow(Number(number.charAt(i)), exponent);
  }
  if (sum === num) {
    return true;
  }
  return false;
};

module.exports = {isArmstrongNumber};



