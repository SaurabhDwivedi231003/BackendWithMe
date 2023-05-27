//----------------HTTP SERVER--------------------

// Firstly require http modulde

const http = require('http');
 
// now we can acces by using createServer function
// request is doene by user and response is given by server 
const server = http.createServer((req, res) =>{
     res.end("Hello I'm a Server !");
});
server.listen(8000 , "127.0.0.1" ,() => { 
    console.log("listening at the post 8000");
}); 