// ASYNCHRUNOUS  = call backs concept 
// Ek kaam ho jye then hum function ko call kr skte hain easily

const fs = require('fs');

//kuuki hum Asynchronous way use kr rhe hain toh agr call back use nahi krege toh error milegi.
//because we are using Asynchronous way , so if we dont use call back then we will get an error.
fs.writeFile('read.txt' , "its an awesom day : " ,
 (err) => {                               // <<---- this part is called as CALL BACK function / mtlb jaise hi comma k phle wala execute hua then ye run kr jyega 
  console.log("File is created");         //call back execution msg
  console.log(err);                       //NULL as output for no error
});

//  Now pass them a function as an arguement - a callBack -

fs.appendFile("read.txt" ,  "welcom buddies" ,   //append will add data to file which already exists.
(err)=>{
    console.log("DATA ADDED");
});

fs.readFile('read.txt' , 'utf8', (err , data)=>{
    console.log(data);
});