// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// Runtime: 86 ms, faster than 48.24% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 41.8 MB, less than 71.84% of JavaScript online submissions for Pascal's Triangle.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows: number) => {
  const res = [[1]];

  outer: for (let i = 1; i < numRows; i++) {
    if (!res[i]) res[i] = [1];
    let q = 1;
    while (true) {
      const cur = (res[i - 1][q - 1] ?? 0) + (res[i - 1][q] ?? 0);
      if (!cur) {
        continue outer;
      }
      res[i].push(cur);
      q++;
    }
  }

  return res;
};

export default generate;
