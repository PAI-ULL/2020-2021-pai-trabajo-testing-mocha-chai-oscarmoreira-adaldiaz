/**
 * University of La Laguna
 * Computer engineering
 * Subject: Programming of interactive applications
 *
 * @author Óscar Moreira Estévez
 * @author Adal Díaz Fariña
 * @date 14-03-2021
 * @brief Code for Exercism's challenge "Armstrong Numbers"
 */

'use strict';

/**
 * @description Returns whether or not it is an Armstrong Number
 * @param  {Number} num
 * @returns Boolean
 */
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



