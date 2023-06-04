const express = require('express');
const app= express();
const path = require('path');

//absolute path
const staticPath = path.join(__dirname,'../public');

console.log(staticPath);

//middleware in expressJS

//app.use(express.static(staticPath));

//to set the view engine
app.set('view engine', 'hbs');

//template engine route
app.get('/',(req,res)=>{
  res.render('index');
})

app.get("/",(req,res)=>{
  res.send("<h1>hello from the express</h1>");
});
app.listen(3000,()=>{
  console.log("connection made successfully");
});