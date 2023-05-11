const http = require('http');
const fs=require('fs');

const data=fs.readFileSync('userApi.json','utf-8');
const objData=JSON.parse(data);
  
const server=http.createServer((req,res)=>{

if(req.url=='/userApi'){
  res.writeHead(200,{"Content-type":"application/json"});
  res.end(data);
  //this will show the data of first emplyee
  // res.end(objdata[1].userId);
 }

else{ 
  res.writeHead(404,{"Content-type":"text/html"});
  res.end('<h1>404 error Page does not exist</h1>');
  }
});

server.listen(7000,'127.0.0.1',()=>{
  console.log("server created successfully");
})