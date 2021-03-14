/**
 * University of La Laguna
 * Computer engineering
 * Subject: Programming of interactive applications
 *
 * @author Óscar Moreira Estévez
 * @author Adal Díaz Fariña
 * @date 14-03-2021
 * @brief Code for Exercism's challenge "strain"
 */

'use strict'

/**
 * @param  {array object} collection=[]
 * @param  {function} predicate
 * @description Function to know the elements that the predicate is true
 * @returns array with elements that the predicate is true
 */
const keep = (collection = [], predicate) => {
  let keepArray = collection.filter(element => predicate(element) == true);
  return keepArray;
};

/**
 * @param  {array object} collection=[]
 * @param  {function} predicate
 * @description Function to know the elements that the predicate is false
 * @returns array with elements that the predicate is false
 */
const discard = (collection = [], predicate) => {
  let discardArray = collection.filter(element => predicate(element) == false);
  return discardArray;
};

module.exports = {keep, discard}