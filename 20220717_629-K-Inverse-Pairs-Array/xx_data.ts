const randomInt = (max = 100) => Math.floor(Math.random() * max);

// (n: number, k: number)
const generator = () => [randomInt(10), randomInt(100)];
const display = console.log.bind(console);

export { generator, display };
