// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// Runtime: 184 ms, faster than 100.00% of TypeScript online submissions for Out of Boundary Paths.
// Memory Usage: 52.1 MB, less than 100.00% of TypeScript online submissions for Out of Boundary Paths.

type Registry = Record<number, Record<number, number>>;

function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
  let dp: Registry = {
    [startRow]: {
      [startColumn]: 1
    }
  };
  let result = 0;
  const mod = 1000000007;

  for (let move = 1; move <= maxMove; move++) {
    const cur: Registry = {};
    for (let row = 0; row < m; row++) {
      if (!cur[row]) cur[row] = {};
      for (let col = 0; col < n; col++) {
        // NOTE(secondfry): we check each boundary
        // because we can get into corner and thus need to count more
        // than one condition
        if (row == 0) result = (result + (dp[row]?.[col] ?? 0)) % mod;
        if (row == m - 1) result = (result + (dp[row]?.[col] ?? 0)) % mod;
        if (col == 0) result = (result + (dp[row]?.[col] ?? 0)) % mod;
        if (col == n - 1) result = (result + (dp[row]?.[col] ?? 0)) % mod;

        // NOTE(secondfry): count amount of ways one can get into this cell
        // which is sum of ways to get into adjacent cells
        // in last iteration.
        cur[row][col] = 0;
        if (row > 0) cur[row][col] = (cur[row][col] + (dp[row - 1]?.[col] ?? 0)) % mod;
        if (row < m - 1) cur[row][col] = (cur[row][col] + (dp[row + 1]?.[col] ?? 0)) % mod;
        if (col > 0) cur[row][col] = (cur[row][col] + (dp[row]?.[col - 1] ?? 0)) % mod;
        if (col < n - 1) cur[row][col] = (cur[row][col] + (dp[row]?.[col + 1] ?? 0)) % mod;
      }
    }
    dp = cur;
  }

  return result;
};
