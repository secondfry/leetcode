const randomInt = (max = 100) => Math.floor(Math.random() * max);

// (m: number, n: number, maxMove: number, startRow: number, startColumn: number)
const generator = () => {
  const m = 10 + randomInt(10);
  const n = 10 + randomInt(10);
  const maxMove = m + n + 50;
  const startRow = Math.min(randomInt(10), m - 1);
  const startColumn = Math.min(randomInt(10), n - 1);
  return [m, n, maxMove, startRow, startColumn];
};
const display = console.log.bind(console);

export { generator, display };
