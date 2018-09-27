const http = require('http');
const cal1 = require('./calc'); 
const cal2 = require('./calc2');
const cal3 = require('./calc3');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain ;');
  res.end('1+1 = ${cal1.add(1,1)}\n'+
  '2-10 = ${cal2.sub(2,10)}\n'+
  '3*7 = ${cal3.mul(3,7)}\n'+
  '7%3 = ${cal1.rem(7,3)}');
                                           
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});