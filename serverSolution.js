const http = require('http');

const server = http.createServer((req, res) => {
  //Simulate a long-running task asynchronously
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); //Simulate 5 seconds delay
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});