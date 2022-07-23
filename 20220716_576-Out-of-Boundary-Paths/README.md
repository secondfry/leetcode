# 576. Out of Boundary Paths

## From idea to accepted answer

From the start I decided to try to find mathematical answer to this,
but gave up early only to find out that dumb bruteforce doesn't match
time limits. After that I've spent a lot of time trying to solve this
with either math or DP, but couldn't properly wrap my head around
counting actual result value.

Then I gave up and checked the solutions.

Struggle time – 57m 2s (including waiting for tests).

## Improvements

...

## Ideal leetcode solution

So first approach is the bruteforce, but second one is bruteforce
with memoization. I should have thought about this honestly.

Somehow I've spent quite a lot of time combating Leetcode giving me wrong answer.
In the end I've figured out that it doesn't really like variable declaration
in global scope – I had cache there – so I've just passed cache as a parameter.

Solution time – 22m 16s (including waiting for tests).

> Runtime: 154 ms, faster than 100.00% of TypeScript online submissions for Out of Boundary Paths.  
> Memory Usage: 45.9 MB, less than 100.00% of TypeScript online submissions for Out of Boundary Paths.

Complexity Analysis:

- Time complexity : O(m * n * maxMove). Upper bound is limited by cache size,
  reducing O(4^n) from bruteforce to much better O(m * n * maxMove).
- Space complexity : O(m * n * maxMove). Cache size.

After that I proceeded to read, understand and implement DP approach.

Solution time – 33m (including waiting for tests).

> Runtime: 184 ms, faster than 100.00% of TypeScript online submissions for Out of Boundary Paths.  
> Memory Usage: 52.1 MB, less than 100.00% of TypeScript online submissions for Out of Boundary Paths.

Complexity Analysis:

- Time complexity : O(m * n * maxMove). Iterating m * n array maxMove times.
- Space complexity : O(m * n). Cache size for current and previous DP step.

## Benchmark

```
x2_memoized_bruteforce.ts x 1,362 ops/sec ±0.18% (100 runs sampled)
x3_dp.ts x 2,541 ops/sec ±0.08% (101 runs sampled)
Fastest is x3_dp.ts
```
