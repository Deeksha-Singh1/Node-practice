const http = require('http');
const server=http.createServer((req,res)=>{
if(req.url == '/')
  res.end('Hi all, Welcome to my page');
else if(req.url=='/about')
  res.end('Hi all, Welcome to my about us page');
else if(req.url=='/contact')
  res.end('Hi all, Welcome to my contact page'); 
else{ 
  res.writeHead(404,{"Content-type":"text/html"});
  res.end('<h1>404 error Page does not exist</h1>');
  }
});

server.listen(8000,'127.0.0.1',()=>{
  console.log("server created successfully");
})