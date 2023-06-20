const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname)+'/index.html');
});

app.get('/about',(eq, res)=>{
  res.sendFile(path.resolve(__dirname)+'/about.html');
});

//downloads the static file
app.get('/download',(req,res)=>{
  res.download(path.resolve(__dirname)+'/about.html');
})

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))