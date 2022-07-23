// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// Runtime: 74 ms, faster than 90.54% of TypeScript online submissions for Binary Tree Right Side View.
// Memory Usage: 44.6 MB, less than 79.42% of TypeScript online submissions for Binary Tree Right Side View.

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const solve = (root: TreeNode | null, res: number[], depth: number) => {
  if (!root) {
    return res;
  }

  if (res.length == depth) {
    res.push(root.val);
  }

  res = solve(root.right, res, depth + 1);
  res = solve(root.left, res, depth + 1);

  return res;
};

function rightSideView(root: TreeNode | null): number[] {
  return solve(root, [], 0);
}

export default rightSideView;
