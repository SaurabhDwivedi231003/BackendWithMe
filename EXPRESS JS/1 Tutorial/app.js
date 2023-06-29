// -------Documentation : https://expressjs.com/en/4x/api.html

const express = require('express');
const app = express();

// ------above code create express application--------// 

// We will create our own API following CRUD operation
// get - READ
// post - CREATE
// put  - UPDATE
// delete - DELETE

// app.get(route , callback)  - route mean on click what , and callback has request and response.
// req represent HTTP request , res represent HTTP response. 
app.get("/" , (req , res) =>{
        res.send("Hello from the Express , we are ready ");
});

app.get("/about" , (req,res)=>{
    res.send("Your are at ABOUT page ");
})

app.listen(8000 , () =>{
    console.log("Listening at post 8000");
});
