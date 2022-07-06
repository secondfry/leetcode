# 156. Candy

## From idea to accepted answer

Wanted to go through the array once,
but quickly realised that [9, 8, 7, 6] sequence forces repeats.
Switched to creating neighbouring graph – node links to
higher rated neighbours. One pass to create graph, one pass
to calculate candy requirements, one pass to sum it all
(third pass is not needed, could do it in just two).

Solution time – 20m 47s (including waiting for tests).

> Runtime: 239 ms, faster than 21.05% of TypeScript online submissions for Candy.  
> Memory Usage: 57.4 MB, less than 5.26% of TypeScript online submissions for Candy.

Complexity Analysis:

- Time complexity : O(n). The array candies of size n and support structures of same size are traversed thrice.
- Space complexity : O(n). Two support structures (graph and resulting candy counter) of size n is used.

## Improvements

Removing third unneeded pass nets:

> Runtime: 188 ms, faster than 28.07% of TypeScript online submissions for Candy.  
> Memory Usage: 57.9 MB, less than 5.26% of TypeScript online submissions for Candy.

Complexity Analysis:

- Time complexity : O(n). The array candies of size n and support structures of same size are traversed twice.
- Space complexity : O(n). Two support structures (graph and resulting candy counter) of size n is used.

## Ideal leetcode solution

...outperforms mine in space complexity requiring just
O(1) to store some variables. I've seen candy requirements as
increasing and decreasing sequences but didn't even start
thinking if I can use it somehow.

Sometimes you need more math :D.
