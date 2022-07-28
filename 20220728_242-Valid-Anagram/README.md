# 242. Valid Anagram

## From idea to accepted answer

I've wrote variant with sorting. Did think about frequency counting,
but for such small problem didn't think that it will make difference.
Looking back at this – well, O(n) is less than O(n * log n). Was dumb of me.

Solution time – 2m 40s (including waiting for tests).

> Runtime: 161 ms, faster than 17.87% of JavaScript online submissions for Valid Anagram.  
> Memory Usage: 46.4 MB, less than 33.71% of JavaScript online submissions for Valid Anagram.

Complexity Analysis:

- Time complexity : O(n * log n). We have to sort inputs.
- Space complexity : O(n).

## Improvements

...

## Ideal leetcode solution

...is actually frequency counting.

Solution time – 2m 48s (including waiting for tests).

> Runtime: 86 ms, faster than 91.19% of JavaScript online submissions for Valid Anagram.  
> Memory Usage: 42.5 MB, less than 93.09% of JavaScript online submissions for Valid Anagram.

Complexity Analysis:

- Time complexity : O(n). Counting and comparing is linear.
- Space complexity : O(n).

## Benchmarks

On random inputs:
```
01_sort.ts x 400 ops/sec ±2.33% (90 runs sampled)
x2_frequency_counting.ts x 29,002 ops/sec ±1.39% (91 runs sampled)
Fastest is x2_frequency_counting.ts
```

On true inputs:
```
01_sort.ts x 413 ops/sec ±0.71% (93 runs sampled)
x2_frequency_counting.ts x 30,258 ops/sec ±0.79% (98 runs sampled)
Fastest is x2_frequency_counting.ts
```
