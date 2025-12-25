#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = parseInt(process.argv[2] || process.env.PORT || '5000', 10);
const root = process.cwd();

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.json': 'application/json',
  '.wasm': 'application/wasm',
  '.ico': 'image/x-icon',
};

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = mime[ext] || 'application/octet-stream';
  fs.createReadStream(filePath).on('error', () => {
    res.writeHead(404);
    res.end('Not found');
  }).pipe(res);
  res.writeHead(200, { 'Content-Type': type });
}

http.createServer((req, res) => {
  try {
    // Prevent directory traversal
    const safeUrl = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(root, safeUrl);

    // If root or directory, serve index.html
    if (safeUrl === '/' || safeUrl === '') {
      filePath = path.join(root, 'index.html');
    }

    // If requested path exists and is a file, serve it
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return sendFile(res, filePath);
    }

    // If not found, fallback to index.html (SPA)
    const index = path.join(root, 'index.html');
    if (fs.existsSync(index)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(index).pipe(res);
      return;
    }

    res.writeHead(404);
    res.end('Not found');
  } catch (e) {
    res.writeHead(500);
    res.end('Server error');
  }
}).listen(port, '0.0.0.0', () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
});
