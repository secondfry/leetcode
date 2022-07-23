// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// Runtime: 68 ms, faster than 81.61% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 42.2 MB, less than 25.19% of JavaScript online submissions for Pascal's Triangle.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows: number) => {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const res = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    const cur = [1];
    for (let q = 1; q < res[i - 1].length; q++) {
      cur.push(res[i - 1][q - 1] + res[i - 1][q]);
    }
    cur.push(1);
    res.push(cur);
  }

  return res;
};

export default generate;
