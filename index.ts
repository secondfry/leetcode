import fs from 'fs/promises';

import Benchmark from 'benchmark';

const getProblems = async (filter?: string) =>
  (
    await fs.readdir('.', {
      withFileTypes: true,
    })
  )
    .filter((x) => {
      if (!x.isDirectory()) return false;
      if (['.git', 'node_modules'].includes(x.name)) return false;
      if (filter && !RegExp(filter).exec(x.name)) return false;

      return true;
    })
    .map((x) => x.name);

const getSolutions = async (problem: string) =>
  (await fs.readdir(problem)).filter((x) => x.endsWith('.ts') && x !== 'xx_data.ts' && !x.startsWith('f'));

const benchmark = async (problem: string) => {
  const { generator, display } = await import(`./${problem}/xx_data.ts`);
  const solutions = await Promise.all(
    (await getSolutions(problem)).map(async (solution) => [solution, await import(`./${problem}/${solution}`)]),
  );

  const data = generator();
  const benchmark = new Benchmark.Suite();
  for (const [name, { default: fn }] of solutions) {
    benchmark.add(name, () => fn(...data));
  }

  benchmark.on('cycle', function (event: Benchmark.Event) {
    console.log(String(event.target));
  });

  await new Promise<void>((resolve, reject) => {
    benchmark.on('complete', function () {
      console.log('Fastest is ' + benchmark.filter('fastest').map('name'));
      console.log();
      resolve();
    });

    benchmark.on('error', function (err: Error) {
      console.error(err);
      reject(err);
    });

    console.log(problem);
    benchmark.run();
  });
};

const run = async () => {
  const problems = await getProblems(process.argv[2]);
  await Promise.all(problems.map(benchmark));
};

run();
