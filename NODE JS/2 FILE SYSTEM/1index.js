// ------------>> CORE/NODE MODULES <<----------------
// STUDY THE CONCEPT OF FILE SYSTEM

const { log } = require('console');
const fs = require('fs');   // fs = FILE SYSTEM , we can access module by writing require , check documentation

// ------------>> YE SIRF REAPLACE AUR OVERWRITE KREGE<<------------

fs.writeFileSync('read.txt' , " WELCOME TO CORE MODULE"); // iska mtlb agr read.txt exit krti h toh usme ye content daldo nahi toh phle read.txt bnao fir ye content daldo
fs.writeFileSync('read.txt' , " hy and  hello here");     // ab yha toh read.txt already bani h toh jo b idhr likhege wo sb replace krdega picchle wale ko.
//read.txt already bani hui upr.


// ------------>> YE ussi me cheezem ADD krdega <<------------
fs.appendFileSync( " read.txt " , " HELLO BUDDY KAISE HO !");


// ------------>> ab agr dusri files k data ko read krna h toh node modules ko require kro aur function use kro <<------------

// fs.readFileSync('read.txt');

//const buf_data = fs.readFileSync('read.txt');  // issiliye kiya taki console.log krke hm data ko prunt krwa sken
//console.log(buf_data);


//<Buffer 20 68 79 20 61 6e 64 20 20 68 65 6c 6c 6f 20 68 65 72 65 20 20 20 20 48 45 4c 4c 4f 20 42 55 44 44 59 20 4b 41 49 53 45 20 48 4f 20 21>

// jab bhi files ko read krege toh buffer data milega

// Node.js includes an additional data type called Buffer.
// This functionality was not present on Browser's javascript 
// Buffer is mainly used to store binary data

org_data = buf_data.toString();  // org_data ek variable bnaya jo buf_data ko string me convert krke uska data rkhta
console.log(org_data);

//buffer data ko string me dekhne k liye 'utf8' ka use bhi kr skte hain
//const data = fs.readFileSync('read.txt' , 'utf8');


// ------------>> TO RENAME FILE <<------------

fs.renameSync('read.txt','readwrite.txt');
