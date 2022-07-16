// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// 158 / 216 test cases passed.
// Status: Wrong Answer

// Submitted: 8 minutes ago
// Input: [1,2,3,4]
// Output: [1,3]
// Expected: [1,3,4]

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

function rightSideView(root: TreeNode | null): number[] {
  const res = [];

  while (root) {
    res.push(root.val);
    root = root.right ?? root.left;
  }

  return res;
}
