const http =  require('http');
const fs = require('fs');
const requests = require('requests');

const homeFile = fs.readFileSync('home.html' , "utf-8");

const replaceVal = (tempVal , orgVal) => {
  let temperature = tempVal.replace("{%tempVal%}" , orgVal.main.temp);
  temperature = temperature.replace("{%loaction%}" , orgVal.name);
  temperature = temperature.replace("{%country%}" , orgVal.sys.country);
  temperature = temperature.replace("{%tempmax%}" , orgVal.main.temp_max);
  temperature = temperature.replace("{%tempmin%}" , orgVal.main.temp_min);
  temperature = temperature.replace("{%tempstatus%}" , orgVal.weather[0].main);
  return temperature;
};


const server = http.createServer((req, res)=>{
    if(req.url == "/"){

        requests('https://api.openweathermap.org/data/2.5/weather?q=Bhopal&units=metric&appid=9a9ba60b7a7c6e2b5a220d86f74f8864')
        .on('data', (chunk)=> {
            const objData = JSON.parse(chunk);
            const arrData = [objData];
          //console.log(arrData[0].main.temp);

          const realTimeData = arrData.map((val) =>  replaceVal(homeFile , val)).join("");
          res.write(realTimeData);
         // console.log(realTimeData);
        })

        .on('end',(err) => {
          if (err) return console.log('connection closed due to errors', err);
          console.log('end');
        });
    }
});

server.listen(80 , "127.0.0.1");


 