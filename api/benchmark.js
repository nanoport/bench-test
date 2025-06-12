module.exports = (req, res) => {
  const start = Date.now();
  let x = 0;
  for (let i = 0; i < 1e7; i++) {
    x += Math.sin(i);
  }
  const duration = Date.now() - start;
  res.json({ time_ms: duration, result: x });
};