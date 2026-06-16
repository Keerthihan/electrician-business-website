// Gzip-enabled static server for accurate Lighthouse testing.
// Uses only built-in Node.js modules + no new npm installs needed.
import { createServer as createHttpServer } from 'http';
import { createServer as createHttpsServer } from 'https';
import { createReadStream, readFileSync, statSync, existsSync } from 'fs';
import { createGzip } from 'zlib';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import os from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;
const HTTPS_PORT = process.env.HTTPS_PORT || 3443;
const USE_HTTPS = process.env.HTTPS === 'true';
const CERT = join(__dirname, '.cert', 'localhost.pem');
const KEY = join(__dirname, '.cert', 'localhost-key.pem');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
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
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (USE_HTTPS) {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }

  if (shouldGzip) {
    res.setHeader('Content-Encoding', 'gzip');
    res.setHeader('Vary', 'Accept-Encoding');
    createReadStream(filePath).pipe(createGzip({ level: 6 })).pipe(res);
  } else {
    createReadStream(filePath).pipe(res);
  }
}

function handleRequest(req, res) {
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
}

function getNetworkIp() {
  return Object.values(os.networkInterfaces())
    .flat()
    .find(i => i?.family === 'IPv4' && !i?.internal)?.address || 'localhost';
}

if (USE_HTTPS) {
  if (!existsSync(CERT) || !existsSync(KEY)) {
    throw new Error('Missing local HTTPS certs. Expected .cert/localhost.pem and .cert/localhost-key.pem');
  }

  const httpsServer = createHttpsServer(
    {
      cert: readFileSync(CERT),
      key: readFileSync(KEY),
    },
    handleRequest,
  );

  const redirectServer = createHttpServer((req, res) => {
    const host = (req.headers.host || `localhost:${PORT}`).replace(/:\d+$/, `:${HTTPS_PORT}`);
    res.statusCode = 308;
    res.setHeader('Location', `https://${host}${req.url || '/'}`);
    res.end('Redirecting to HTTPS');
  });

  httpsServer.listen(HTTPS_PORT, '0.0.0.0', () => {
    const ip = getNetworkIp();

    console.log('\n  Production preview (gzip + HTTPS enabled)\n');
    console.log(`  ➜  Local:   https://localhost:${HTTPS_PORT}/`);
    console.log(`  ➜  Network: https://${ip}:${HTTPS_PORT}/\n`);
  });

  redirectServer.listen(PORT, '0.0.0.0', () => {
    console.log(`  ➜  HTTP redirects from http://localhost:${PORT}/ to HTTPS\n`);
  });
} else {
  const server = createHttpServer(handleRequest);

  server.listen(PORT, '0.0.0.0', () => {
    const ip = getNetworkIp();

    console.log('\n  Production preview (gzip enabled)\n');
    console.log(`  ➜  Local:   http://localhost:${PORT}/`);
    console.log(`  ➜  Network: http://${ip}:${PORT}/\n`);
  });
}
