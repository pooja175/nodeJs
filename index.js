const http = require('http');
const url = require('url');

const hostname = '0.0.0.0';  // listen on all interfaces
const port = 3000;

function logger(req) {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url}`);
}

const server = http.createServer((req, res) => {
  logger(req);

  const parsedUrl = url.parse(req.url, true);

  res.setHeader('Content-Type', 'text/html');

  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.end('<h1>Welcome to DevOps World</h1>');
  } else if (parsedUrl.pathname === '/about') {
    res.statusCode = 200;
    res.end('<h1>About: This is a Node.js server with logging & routing!!!</h1>');
  } else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(port, hostname, () => {
  console.log(`🚀 Server running at http://localhost:${port}/`);
});
