// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// 80 / 94 test cases passed.
// Status: Time Limit Exceeded

// Submitted: 1 hour, 19 minutes ago
// Last executed input: 8
// 50
// 23
// 5
// 26

function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
  if (startRow < 0 || startRow == m) return 1;
  if (startColumn < 0 || startColumn == n) return 1;
  if (maxMove == 0) return 0;
  return findPaths(m, n, maxMove - 1, startRow + 1, startColumn) +
      findPaths(m, n, maxMove - 1, startRow - 1, startColumn) +
      findPaths(m, n, maxMove - 1, startRow, startColumn + 1) +
      findPaths(m, n, maxMove - 1, startRow, startColumn - 1);
};

export default findPaths;
