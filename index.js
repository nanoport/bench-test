/ index.js
const express = require('express');
const runBenchmark = require('./benchmark');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({
    message: 'VM Benchmark Server',
    hostname: os.hostname(),
    uptime: os.uptime(),
    platform: os.platform(),
    arch: os.arch(),
  });
});

app.get('/benchmark', async (req, res) => {
  try {
    const result = await runBenchmark(1);
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Benchmark server running on http://localhost:${PORT}`);
});
