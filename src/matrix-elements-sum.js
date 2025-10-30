const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (matrix.length === 0) return 0;
  let sum = 0;
  const cols = matrix[0].length;
  const allowed = new Array(cols).fill(true);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < cols; col++) {
      if (allowed[col]) {
        sum += matrix[row][col];
        if (matrix[row][col] === 0) {
          allowed[col] = false;
        }
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
