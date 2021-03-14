/**
 * University of La Laguna
 * Computer engineering
 * Subject: Programming of interactive applications
 *
 * @author Óscar Moreira Estévez
 * @author Adal Díaz Fariña
 * @date 14-03-2021
 * @brief Code for Exercism's challenge "Darts"
 */

'use strict';

/**
 * @description The function score returns the corresponding score, depending on the given coordinates.
 * @param  {} coorX
 * @param  {} coorY
 * @returns Number
 */
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