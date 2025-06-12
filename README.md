// README.md
# VM Benchmark Server

This small Node.js app runs CPU benchmarks via HTTP to profile compute environments like Firecracker VMs or serverless functions.

## Usage

```bash
npm install
npm run build
npm start
```

Then visit: [http://localhost:3000/benchmark](http://localhost:3000/benchmark)

## Routes
- `/` → VM info (hostname, uptime, arch)
- `/benchmark` → Runs and returns benchmark result

## Deploying inside Firecracker
- Copy project to your rootfs
- Ensure `node` and `npm` are installed
- Serve using `node index.js` or set as systemd service
