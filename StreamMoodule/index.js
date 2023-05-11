const fs=require('fs');
const http =  require('http');
const server = http.createServer();

 //first method
server.on('request',(req,res)=>{
  fs.readFile('input.txt', 'utf-8',(err,data)=>{
    res.end(data);
  });
});

server.listen(8000,'127.0.0.1');
  

  //second method
  //reading from a stream
  //create a readable stream
  //handle stream events --> data, end and error
  server.on('request',(req,res)=>{

  const SecondStream = fs.createReadStream('input.txt');
  SecondStream.on('data',(chunkData)=>{
    res.write(chunkData);
  });
  
  SecondStream.on('end',()=>{
      res.end(); 
  });

  SecondStream.on('error',(err)=>{
    console.log(err);
    res.end("wrong page no data found XO");
  });
});
server.listen(8000,"127.0.0.1") ;

//Third method

server.on('request',(req,res)=>{
  const streaming= fs.createReadStream('input.txt');
  streaming.pipe(res);
});
server.listen(8000,'127.0.0.1');
