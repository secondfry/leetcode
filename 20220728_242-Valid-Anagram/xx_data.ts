const randomChar = () => String.fromCharCode(97 + Math.floor(Math.random() * 26));
const randomString = (max = 10000) => Array(max).fill(0).map(() => randomChar()[0]).join('');

// (s: string, t: string)
const generator = () => {
  const a = randomString();
  const b = (() => {
    const arr = Array.from(a);
    const temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr.join('');
  })();

  return [a, b];
};
const display = console.log.bind(console);

export { generator, display };
