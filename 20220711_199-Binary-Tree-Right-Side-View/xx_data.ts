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

// NOTE(secondfry): amount should be 2^n-1 or behaviour is undefined.
const generator = (amount = Math.pow(2, 10) - 1) => {
  const data = Array(amount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 100));

  const res = [];
  res[0] = new TreeNode(data[0]);
  const max = (amount + 1) / 2 - 1;
  for (let i = 0; i < max; i++) {
    res[2 * i + 1] = new TreeNode(data[2 * i + 1]);
    res[i].left = res[2 * i + 1];
    res[2 * i + 2] = new TreeNode(data[2 * i + 2]);
    res[i].right = res[2 * i + 2];
  }

  const mutations = amount / 100 + Math.random() * amount / 100;
  for (let i = 0; i < mutations; i++) {
    const idx = 1 + Math.floor(Math.random() * (amount - 1));
    const parent = Math.floor(idx / 2);
    res[idx] = null;
    if (!res[parent]) continue;
    if (idx % 2) res[parent]!.left = null;
    else res[parent]!.right = null;
  }

  return [res[0]];
};

const display = (head: TreeNode) => {
  const res = [];
  const queue = [head];

  while (queue[0]) {
    const cur = queue.shift()!;
    res.push(cur.val);
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }

  console.log(res);
};

export { generator, display };
