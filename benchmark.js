/ benchmark.js
const cpuBenchmark = require('cpu-benchmark');

async function runBenchmark(rounds = 1) {
  const results = await cpuBenchmark.benchmark(rounds);
  return results;
}

module.exports = runBenchmark;
