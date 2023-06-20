const express = require("express");
const app= express();


//  '/' this denotes homepage
app.get("/",(req,res)=>{
  res.send("<h1>hello from the express</h1>");
});

app.get("/about",(req,res)=>{
  res.send("hello from the about page");
});

app.get("/contact",(req,res)=>{
  res.send("hello from the contact page");
});

app.get("/temp",(req,res)=>{
  // res.send([{
  //   id:1,
  //   name:"deeksha"
  // },
  // {
  //   id:2,
  //   name:"singh"
  // },
  // {
  //   id:3,
  //   name:"bhadauria"
  // }]);

  res.json([{
    id:1,
    name:"deeksha"
  },
  {
    id:2,
    name:"singh"
  },
  {
    id:3,
    name:"bhadauria"
  }]);
});


app.listen(3000,()=>{
  console.log("connection made successfully");
});