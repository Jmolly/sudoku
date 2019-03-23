module.exports = function solveSudoku(matrix) {

  let workMatrix = matrix;

  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) {
      if (workMatrix[i][j] === 0) {
        for (let number = 1; number < 10; number++) {
          if (isValid(workMatrix, i, j, number)) {
            workMatrix[i][j] = number;
            if (solveSudoku(workMatrix))
              return solveSudoku(workMatrix);
          }
          workMatrix[i][j] = 0;
        }
        return false;
      }
    }
  return workMatrix;
}

function isValid(workMatrix, i, j, num) {

  let boxRow = Math.floor(i / 3) * 3;
  let boxCol = Math.floor(j / 3) * 3;
  for (let n = 0; n < 9; n++) {
    if (num === workMatrix[n][j] || num === workMatrix[i][n] 
      || num === workMatrix[boxRow + n % 3][boxCol + Math.floor(n / 3)]) 
    return false;
  }

  return true;
}