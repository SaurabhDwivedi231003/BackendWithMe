//==================>> SYNCHRONOUS VS ASYNCHRONOUS <<===================

// --------->> Synchronous way <<----------

const fs = require('fs');

// const data = fs.readFileSync('read.txt' , 'utf-8');
// console.log(data);                       //mtlb phle ye chalega 
// console.log('after the data');           // then ye chalega

// yaha humne synchronos tareeka use kiya mtlb jab tk ek process execute nahi ho jata tb tk dusri wali bhi execute nahi hogi.

// --------->> Asynchronous way <<----------
// mtlb multiple request lega aur jiska kaam phle hota jyega wo execute krte jyega
// jisko deri lg rhi hogi wo utni der hi execute hoga ( phle aoo phle paao jaisa NAHI HAI) time ka game h
fs.readFile('read.txt' , 'utf-8' ,(err , data)=> {         //agr error h toh throw krega else data ko chala dega
    console.log(data);
});
console.log('after the data');

