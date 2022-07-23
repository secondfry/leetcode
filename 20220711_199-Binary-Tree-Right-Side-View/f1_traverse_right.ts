// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// 37 / 216 test cases passed.
// Status: Wrong Answer

// Submitted: 9 minutes ago
// Input: [1,2]
// Output: [1]
// Expected: [1,2]

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
    root = root.right;
  }

  return res;
}

export default rightSideView;
