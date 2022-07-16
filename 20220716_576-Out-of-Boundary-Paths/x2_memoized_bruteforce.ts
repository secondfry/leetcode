// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// Runtime: 154 ms, faster than 100.00% of TypeScript online submissions for Out of Boundary Paths.
// Memory Usage: 45.9 MB, less than 100.00% of TypeScript online submissions for Out of Boundary Paths.

type Registry = Record<number, Record<number, Record<number, number>>>;

const inner = (m: number, n: number, maxMove: number, startRow: number, startColumn: number, data: Registry): number => {
  if (!data[startRow]) data[startRow] = {};
  if (!data[startRow][startColumn]) data[startRow][startColumn] = {};

  if (startRow < 0 || startRow == m) return 1;
  if (startColumn < 0 || startColumn == n) return 1;
  if (maxMove == 0) return 0;
  if (data[startRow][startColumn][maxMove] >= 0) return data[startRow][startColumn][maxMove];

  data[startRow][startColumn][maxMove] = 0 +
    ((inner(m, n, maxMove - 1, startRow + 1, startColumn, data) + inner(m, n, maxMove - 1, startRow - 1, startColumn, data)) % 1000000007 +
    (inner(m, n, maxMove - 1, startRow, startColumn + 1, data) + inner(m, n, maxMove - 1, startRow, startColumn - 1, data)) % 1000000007) % 1000000007;

  return data[startRow][startColumn][maxMove];
}

function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
  return inner(m, n, maxMove, startRow, startColumn, {});
};
