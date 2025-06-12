// api/index.js
const os = require('os');

module.exports = (req, res) => {
  res.status(200).json({
    message: 'VM Benchmark Server (Vercel Function)',
    hostname: os.hostname(),
    uptime: os.uptime(),
    platform: os.platform(),
    arch: os.arch()
  });
};
});
