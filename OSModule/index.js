const os=require('os');

const freeMemory = os.freemem();

console.log(`${freeMemory/1024/1024/1024}`);

console.log(os.arch());

const freeMemo = os.totalmem();

console.log(`${freeMemo/1024/1024/1024}`);

console.log(os.hostname());

 console.log(os.platform());

console.log(os.tmpdir());

console.log(os.type());