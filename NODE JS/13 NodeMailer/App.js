const express = require('express');
const app = express();
const PORT = 5000;




app.get("/" , (req,res)=>{
    res.send("I am a Server ");
});



const sendMail = require('./controller/sendMail');  // exporting from local file
app.get('/sendmail' , sendMail);  // user localhost:5000/sendmail hit krega toh 'I am sending mail'  show krega



const start = async () => {   // just for starting a server
    try{ app.listen(5000 , () => {
        console.log(`I am live in port no ${PORT}`);
    });
}
catch(error){}
};

start();