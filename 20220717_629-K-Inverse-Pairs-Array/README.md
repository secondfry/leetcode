# 629. K Inverse Pairs Array

## From idea to accepted answer

I've been so hard to find out the idea behind DP here, but ultimately failed.
Most promising of them all was attempt to count how far displaced the number is,
but I didn't take into consideration that displacing one number shift all others
to the right. Would I have thought about this, it could be different.

So I gave up and checked the solutions.

Struggle time – 54m 2s (including waiting for tests).

## Improvements

...

## Ideal leetcode solution

Immediatelly skipping bruteforce, Leetcode shared the proper idea about
counting displacements, which then lets you narrow this down to
summing n - 1 with various k smaller problems - DP it is (I disregard
recursive solution with memoization because it does not fit into time limits
and honestly logical step from that to DP is quite small).

Personally I didn't like approach with cumulative sum and preferred
[the other one](x1_dp.ts).

Solution time – 38m 25s (including waiting for tests).

> Runtime: 444 ms, faster than 100.00% of TypeScript online submissions for K Inverse Pairs Array.
> Memory Usage: 76.4 MB, less than 100.00% of TypeScript online submissions for K Inverse Pairs Array.

Complexity Analysis:

- Time complexity : O(n * k). Traveling DP space of n * k.
- Space complexity : O(n * k).

Space complexity can be further optimised to O(k) if you would notice
that you only use last row of DP.

Also it seems there is no competition in TS submissions and even in JS ones
time and memory of all submissions are all in one place exactly.
