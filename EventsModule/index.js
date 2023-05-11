const EventEmitter = require('events');
const event= new EventEmitter();

event.on('sayMyName',(name)=>{
  console.log('Your first name is Deeksha');
});

event.on('sayMyName',(name)=>{
  console.log('your middle name is Singh');
});

event.on('sayMyName',()=>{
  console.log('Your last name is Bhadauria');
});

event.emit('sayMyName');

//registering for the event with callback parameters
event.on('checkStatus',(statusCode,msg)=>{
  console.log(`Status code is ${statusCode} and the page is ${msg}`);
})

event.emit('checkStatus', 200,'ok');
event.emit('checkStatus', 404,'deleted');
