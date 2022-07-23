// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// Runtime: 444 ms, faster than 100.00% of TypeScript online submissions for K Inverse Pairs Array.
// Memory Usage: 76.4 MB, less than 100.00% of TypeScript online submissions for K Inverse Pairs Array.

const mod = 1000000007;

function kInversePairs(n: number, k: number): number {
  if (n === 0) return 0;
  if (k === 0) return 1;

  const data: Record<number, Record<number, number>> = {};

  for (let i = 1; i <= n; i++) {
    if (!data[i]) data[i] = {};

    // NOTE(secondfry): we can't ever exceed amount of pairs
    // of completely inverse array.
    const max = i * (i - 1) / 2;

    for (let j = 0; j <= k && j <= max; j++) {
      // NOTE(secondfry): zero inverse pairs can be archieved only once.
      if (j === 0) data[i][j] = 1;
      else {
        // NOTE(secondfry): sum (n, k - 1) with (n - 1, k)
        // and subtract elem came from (n, k - 1) which is not part
        // of our current sum aka subtract (n - 1, k - i).
        data[i][j] = 0 +
          (((data[i - 1]?.[j] ?? 0) + (data[i]?.[j - 1] ?? 0)) % mod +
          (mod - (data[i - 1]?.[j - i] ?? 0)) % mod) % mod;
      }
    }
  }

  return data[n]?.[k] ?? 0;
};

export default kInversePairs;
