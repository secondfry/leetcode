// Author: Rustam SecondFry Gubaydullin <secondfry+github@gmail.com>
// Runtime: 188 ms, faster than 28.07% of TypeScript online submissions for Candy.
// Memory Usage: 57.9 MB, less than 5.26% of TypeScript online submissions for Candy.

function candy(ratings: number[]): number {
  const map: Record<number, number[]> = {};

  for (let i = 0; i < ratings.length; i++) {
    const prev = ratings[i - 1];
    const cur = ratings[i];
    const next = ratings[i + 1];

    map[i] = [];

    if (cur > prev) {
      map[i].push(i - 1);
    }

    if (cur > next) {
      map[i].push(i + 1);
    }
  }

  const dict: Record<number, number> = {};

  const traverse = (idx: number) => {
    if (dict[idx]) {
      return;
    }

    if (map[idx].length === 0) {
      dict[idx] = 1;
      return;
    }

    if (map[idx].length === 1) {
      const neighbour = map[idx][0];
      traverse(neighbour);
      dict[idx] = dict[neighbour] + 1;
      return;
    }

    if (map[idx].length === 2) {
      const left = map[idx][0];
      traverse(left);
      const right = map[idx][1];
      traverse(right);
      dict[idx] = Math.max(dict[left], dict[right]) + 1;
      return;
    }
  };

  let sum = 0;

  for (let i = 0; i < ratings.length; i++) {
    traverse(i);
    sum += dict[i];
  }

  return sum;
}

export default candy;
