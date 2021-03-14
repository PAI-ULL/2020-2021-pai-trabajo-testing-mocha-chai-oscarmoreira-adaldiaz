//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const score = (coorX, coorY) => {
  let circunferenceFormula = Math.pow(coorX, 2) + Math.pow(coorY, 2);

  switch(true) {
    case circunferenceFormula <= 1: 
      return 10;
      break;
    case circunferenceFormula <= 25: 
      return 5;
      break;
    case circunferenceFormula <= 100: 
      return 1;
      break;
    default:
      return 0;
      break;
    }
};

module.exports = { score };