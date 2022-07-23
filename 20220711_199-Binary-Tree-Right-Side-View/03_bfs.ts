// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// Runtime: 96 ms, faster than 63.38% of TypeScript online submissions for Binary Tree Right Side View.
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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  let queue: TreeNode[] = [];
  let nextQueue: TreeNode[] = [];
  const res: number[] = [];

  queue.push(root);

  while (queue[0]) {
    const node = queue.shift() as TreeNode;
    if (node.left) nextQueue.push(node.left);
    if (node.right) nextQueue.push(node.right);

    if (!queue[0]) {
      res.push(node.val);
      queue = nextQueue;
      nextQueue = [];
    }
  }

  return res;
}

export default rightSideView;
