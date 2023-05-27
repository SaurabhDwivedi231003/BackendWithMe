//----------------STREAMIMG------------------------

// So here we are finally going to see how to do streaming in Nodejs
// It is same streaming as netflix , youtube ,etc..

// We have created 'input.txt' which we would use as our streaming content.
// What we want is to execute every line of input.txt in a sequential manner.

const fs = require('fs');
const http = require('http');

const server = http.createServer();

//---------------------------------------------

// server.on('request' , (req,res)=>{
//      fs.readFile('input.txt' , (err,data)=>{
//              if(err) return console.error(err);
//              res.end(data.toString());
//          });
//         This is a normal way not streaming.
//     });

//server.listen(8000 , "127.0.0.1");
//---------------------------------------------


//---------------1ST METHOD-------------------------------------------------------- 

// server.on('requ+est' , (req,res)=>{
// const rstream = fs.createReadStream("input.txt");  //this function create a stream
// rstream.on('data' , (chunkdata) =>{// we have written data because we have to read data available
//         res.write(chunkdata);  // chunkdata is used to present our data in sequence.
//         res.end();
// }); 
// rstream.on('end' , ()=>{
//     res.end();
// });
// rstream.on('error' , (err)=>{ //to show error when file not found , like here our name of file is
//     console.log(err);  
//     res.end('file not found');
// // give some wrong name in place of 'input.txt' example 'inputss.txt' then it will show error
// })
// });

// all the content written inside first method can be written in just 3 line of code.
//-------------------2ND METHOD-------------------------------------------------------------

server.on('request' , (req,res)=>{
    const rstream = fs.createReadStream('input.txt');  // destination of reading content
    rstream.pipe(res);

    //pipe se say give destination from where to read and to where to respond
});

//----------------------------------------------

server.listen(8000 , "127.0.0.1");