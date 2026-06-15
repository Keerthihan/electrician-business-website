// Gzip-enabled static server for accurate Lighthouse testing.
// Uses only built-in Node.js modules + no new npm installs needed.
import { createServer } from 'http';
import { createReadStream, statSync, existsSync } from 'fs';
import { createGzip } from 'zlib';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import os from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.png':  'image/png',
  '.json': 'application/json',
  '.txt':  'text/plain',
  '.xml':  'application/xml',
};

const COMPRESSIBLE = new Set(['.html', '.js', '.css', '.svg', '.json', '.xml', '.txt']);

function serveFile(filePath, req, res) {
  const ext = extname(filePath);
  const mime = MIME[ext] || 'application/octet-stream';
  const acceptsGzip = (req.headers['accept-encoding'] || '').includes('gzip');
  const shouldGzip = acceptsGzip && COMPRESSIBLE.has(ext);
  const isHashed = /\.[a-f0-9]{8,}\.(js|css)$/.test(filePath);

  res.setHeader('Cache-Control', isHashed ? 'public, max-age=31536000, immutable' : 'no-cache');
  res.setHeader('Content-Type', mime);

  if (shouldGzip) {
    res.setHeader('Content-Encoding', 'gzip');
    res.setHeader('Vary', 'Accept-Encoding');
    createReadStream(filePath).pipe(createGzip({ level: 6 })).pipe(res);
  } else {
    createReadStream(filePath).pipe(res);
  }
}

const server = createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  let filePath = join(DIST, urlPath);

  if (existsSync(filePath) && statSync(filePath).isFile()) {
    return serveFile(filePath, req, res);
  }

  filePath = join(DIST, urlPath, 'index.html');
  if (existsSync(filePath)) {
    return serveFile(filePath, req, res);
  }

  // SPA fallback
  serveFile(join(DIST, 'index.html'), req, res);
});

server.listen(PORT, '0.0.0.0', () => {
  const ip = Object.values(os.networkInterfaces())
    .flat()
    .find(i => i?.family === 'IPv4' && !i?.internal)?.address || 'localhost';

  console.log('\n  Production preview (gzip enabled)\n');
  console.log(`  ➜  Local:   http://localhost:${PORT}/`);
  console.log(`  ➜  Network: http://${ip}:${PORT}/\n`);
});
