
//js object
const bioData= {
  name:"deeksha",
  age:21,
  tech:"node.js"
};

console.log(bioData.age);

//converting an js object into JSON data
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

//converting an JSON data to js object
const objData = JSON.parse(jsonData);
console.log(objData);

//adding the json object into a new file
const fs=require('fs');
fs.writeFileSync('json1.json',jsonData,(err)=>{
  console.log("done");
});

//reading the data from that file and converting it back to js object
fs.readFile("json1.json",'utf-8',(err,data)=>{
 console.log(data);

 const originalData=JSON.parse(data);
 console.log( originalData);
});