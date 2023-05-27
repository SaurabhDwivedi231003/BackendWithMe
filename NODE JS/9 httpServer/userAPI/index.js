// here we will write a code to get our api on server 
// api content is written inside userapi.json file.

const http = require('http');
const fs = require('fs');   

const server = http.createServer((req,res)=>{

const data = fs.readFileSync(`${__dirname}/userapi.json` , "utf-8");
const objData = JSON.parse(data);

    if(req.url == "/"){ res.end("THIS IS A HOME"); }
    else if(req.url == "/about"){ res.end("THIS IS A ABOUT"); }
    else if(req.url == "/contact"){ res.end("THIS IS A ABOUT"); }
    
    else if(req.url == "/userapi"){   //mtlb jab user ye particular api k liye rqst krega toh ye json file me rkha data dena h.
        // fs.readFile("./userapi.json", "utf-8" , (err,data)=>{    //`${__dirname}/userapi.json` ki jagah  : "./userapi.json" aise normally b chlega
        //     console.log(data);
        //     res.end(data);
// by fs.readfile we did that assynchronously and all the data is fetched but suppose we want indivual data of or requirement then.

// we called synchronously on line no 9 and 10.
        res.writeHead(200 , {"contenr-type" : "application/json"});
        res.end(objData[0].id);  // this indicated on 2nd index of array we want what type is there. {type is identity like name inside json file go and check once}
        }
    else{
        res.writeHead(404 , { "Content-type" : "text/html" });
        res.end("<h1>ERROR 404 <h1/>");
    }
});

server.listen(8000 , "127.0.0.1" ,  ()=>{
    console.log("Server is running on 8000");
});