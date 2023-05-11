const http = require('http');
const server=http.createServer((req,res)=>{
  res.end('Hi all, Welcome to my page');
});

server.listen(8000,'127.0.0.1',()=>{
  console.log("server created successfully");
})