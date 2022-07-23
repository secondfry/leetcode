// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// Runtime: 79 ms, faster than 61.72% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 42.1 MB, less than 36.37% of JavaScript online submissions for Pascal's Triangle.

const registry: Record<number, number[][]> = {
  1: [[1]],
  2: [[1], [1, 1]],
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows: number) => {
  if (registry[numRows]) return registry[numRows];

  const res = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    const cur = [1];
    for (let q = 1; q < res[i - 1].length; q++) {
      cur.push(res[i - 1][q - 1] + res[i - 1][q]);
    }
    cur.push(1);
    res.push(cur);
    registry[numRows] = [...res];
  }

  return res;
};

export default generate;
