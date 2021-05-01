const http = require('http');
const app = require('./app');

const Url = 'http://localhost:';

const port =  2000;


const server = http.createServer(app);

server.listen(port);

console.log(`server started on ${Url}${port}`);
