const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxSum = 0;
  let digitStr = n.toString();
  for (let i = 0; i < digitStr.length; i++)  {
    let currentSum = digitStr.slice(0, i) + digitStr.slice(i + 1);
    if (maxSum <= currentSum)  maxSum = currentSum;
  }
  return +maxSum;
}

module.exports = {
  deleteDigit
};
