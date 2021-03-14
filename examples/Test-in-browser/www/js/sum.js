/**
 * University of La Laguna
 * Computer engineering
 * Subject: Programming of interactive applications
 *
 * @author Óscar Moreira Estévez
 * @author Adal Díaz Fariña
 * @date 14-03-2021
 * @brief "Example of addition function with the parameters you want"
 */

 'use strict';

 /**
  * @description Returns the sum of all arguments
  * @param  {}
  * @returns Number
  */
function sum() {
    // Convert arguments object to array
    let args = Array.prototype.slice.call(arguments);
    
    // Throw error if arguments contain non-finite number values
    if (!args.every(Number.isFinite)) {
      throw new TypeError('sum() expects only numbers.')
    }
    
    // Return the sum of the arguments
    return args.reduce(function(acc, currentValue) {
      return acc + currentValue;
    }, 0);
}
