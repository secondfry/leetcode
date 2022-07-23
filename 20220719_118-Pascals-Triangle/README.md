# 118. Pascal's Triangle

## From idea to accepted answer

Well, here we can directly for DP without much questions asked.

Solution time – 8m 31s (including waiting for tests).

> Runtime: 86 ms, faster than 48.24% of JavaScript online submissions for Pascal's Triangle.  
> Memory Usage: 41.8 MB, less than 71.84% of JavaScript online submissions for Pascal's Triangle.

Complexity Analysis:

- Time complexity : O(numRows ^ 2).
- Space complexity : O(1). No additional space other than input and output used.

## Improvements

I've decided to remove nullish coalescing because it is not really neccesary
for the solution.

> Runtime: 68 ms, faster than 81.61% of JavaScript online submissions for Pascal's Triangle.  
> Memory Usage: 42.2 MB, less than 25.19% of JavaScript online submissions for Pascal's Triangle.

Not much to see here. So I've tried hax of global cache and...

> Runtime: 79 ms, faster than 61.72% of JavaScript online submissions for Pascal's Triangle.  
> Memory Usage: 42.1 MB, less than 36.37% of JavaScript online submissions for Pascal's Triangle.

They didn't work! Damn! Well, I've invented completely new section of these
READMEs to enjoy the fun of hax.

## Benchmarks

```
01_dp.ts x 26,483 ops/sec ±0.15% (97 runs sampled)
02_no_nullish_coalescing.ts x 49,911 ops/sec ±0.18% (99 runs sampled)
03_global_cache.ts x 127,472,406 ops/sec ±0.13% (99 runs sampled)
Fastest is 03_global_cache.ts
```

Well, global cache is clearly hax, so nothing unusual.
