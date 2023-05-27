//--------------------->>OPERATING SYSTEM MODULES<<-----------------------
// mtlb ab OS k file bgerh ki bhi access le skta h
//  https://nodejs.org/docs/latest-v20.x/api/os.html#oseol     {link for documentation}


const os = require('os');
console.log(os.arch());    // ye btyega ki kitne bit ka os h {32 , 64 etc}
console.log(os.hostname()); // to know the name of host
console.log(os.platform()); // to know the name of platform
console.log(os.version());
console.log(os.tmpdir());
console.log(os.type());

// const freeMemory = os.freemem();       //FREE MEMORY
// console.log(freeMemory); // In bytes form
// console.log(`${freeMemory/ 1024 / 1024 / 1024 }`); // In GB

const totalMemory = os.totalmem();
console.log(`${totalMemory/ 1024 / 1024 / 1024 }`);