// api/benchmark.js
const cpuBenchmark = require('cpu-benchmark');

module.exports = async (req, res) => {
  try {
    const result = await cpuBenchmark.benchmark(1);
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
