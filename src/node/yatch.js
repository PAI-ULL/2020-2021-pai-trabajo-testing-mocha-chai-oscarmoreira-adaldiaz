'use strict'

const score = (puntuations = [], category) => {
  switch (category) {
    case 'yacht':
      return calculatePointsYacht(puntuations);
    case 'ones':
      return calculatePointsNumbers(puntuations, 1);
    case 'twos':
      return calculatePointsNumbers(puntuations, 2);
    case 'threes':
      return calculatePointsNumbers(puntuations, 3)
    case 'fours':
      return calculatePointsNumbers(puntuations, 4); 
    case 'fives':
      return calculatePointsNumbers(puntuations, 5); 
    case 'sixes':
      return calculatePointsNumbers(puntuations, 6); 
    case 'full house':
      return calcultePointsFullHouse(puntuations);
    case 'four of a kind':
      return calcultePointsFourOfKinds(puntuations);
    case 'little straight':
      return calcultePointsLittleStraight(puntuations);
    case 'big straight':
      return calcultePointsBigStraight(puntuations);
    case 'choice':
      return calcultePointsChoice(puntuations);
    default:
      break;
  }
};

const calculatePointsYacht = (points = []) => {
  if (points.find(element => element !== 5)) return 0;
  return 50;
}

const calculatePointsNumbers = (points = [], number) => {
  const sumPoints = points.filter(numberPoint => numberPoint === number)
                        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sumPoints;
}

const calcultePointsFullHouse = (points = []) => {
  const numbersFullHouse = points.filter(number => frequencyOfNumber(points, number) >= 2 
                                                && frequencyOfNumber(points, number) <= 3);
  if (numbersFullHouse.length === 5) {
    return numbersFullHouse.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  return 0;
}

const calcultePointsFourOfKinds = (points = []) => {
  const sameNumbers = points.filter(number => frequencyOfNumber(points, number) >= 4);

  if (sameNumbers.length >= 4) {
    return sameNumbers[0] * 4
  }
  return 0;
}

const calcultePointsLittleStraight = (points = []) => {
  const sumPoints = points.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (sumPoints === 15) {
    return 30
  }
  return 0;
}

const calcultePointsBigStraight = (points = []) => {
  const sumPoints = points.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (sumPoints === 20) {
    return 30
  }
  return 0;
}

const calcultePointsChoice = (points = []) => {
  const sumPoints = points.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sumPoints;
}

const frequencyOfNumber = (arrayNumbers, number) => {
  let totalNumber = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] == number) {
      totalNumber++;
    }
  }
  return totalNumber;
}

module.exports = {score}