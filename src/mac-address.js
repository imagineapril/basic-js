const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let macAddress = 0;
  const regExp = /^[\da-f]+$/i;
  const arr = n.split('-');
  if (arr.length !== 6) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 2) {
      return false;
    }
    if (regExp.test(arr[i])) macAddress += 1;
  }
  return macAddress === 6 ? true : false;
}

module.exports = {
  isMAC48Address
};
