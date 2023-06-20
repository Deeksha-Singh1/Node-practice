const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

app.set('view engine','ejs');

// app.get('/',(req,res)=>{
//   res.sendFile(path.resolve(__dirname)+'/index.html');
// });

// app.get('/about',(eq, res)=>{
//   res.sendFile(path.resolve(__dirname)+'/about.html');
// });

//downloads the static file
app.get('/download',(req,res)=>{
  res.download(path.resolve(__dirname)+'/about.html');
})

//with ejs template engine
app.get('/',(req,res)=>{
  res.render('index', {
    title:'My Home page'
  });
});

app.get('/about',(eq, res)=>{
  res.render('about',{
    title:'My About page'
  });
});

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))