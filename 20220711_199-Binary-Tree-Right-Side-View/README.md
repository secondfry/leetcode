# 199. Binary Tree Right Side View

## From idea to accepted answer

Judging by task descrpition I didn't really understand if I just need to
traverse only right nodes, "see" only right branch of tree or
throw parallel rays from right side and catch all nodes.

So I've just went to implement easiest things first – I guess next time
I won't do this for "Medium" kind of task.

Other than that can't say much, it is plainly simple BFS task.

Solution time – 9m 40s (including waiting for tests).

> Runtime: 96 ms, faster than 63.38% of TypeScript online submissions for Binary Tree Right Side View.  
> Memory Usage: 44.6 MB, less than 79.42% of TypeScript online submissions for Binary Tree Right Side View.

Complexity Analysis:

- Time complexity : O(n). Whole tree is traversed.
- Space complexity : O(n). Auxiliary array will contain at most n / 2 + 1 nodes.

## Improvements

Didn't really explore improvements here, went to discussion to check
if better answer exists.

## Ideal leetcode solution

...seems to be reached by my final accepted solution. Have to note toh that
there is a recursive approach, but worst case scenario space complexity is
O(n) too (in case on a sweked tree).
