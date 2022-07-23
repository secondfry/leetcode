const generator = (amount = 1000) => [
  Array(amount)
    .fill(0)
    .map((x) => Math.floor(Math.random() * 100)),
];

const display = console.log.bind(console);

export { generator, display };
