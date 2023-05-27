//-------------Lets perform some task----------------

const fs = require('fs');
const bioData = { 
    name : "Saurabh",
    age  :  19,
    city : "Bhopal"
};

// 1 : convert to JSON
// 2 : add into some other file
// 3 : read file
// 4 : again convert back to js obj original
// 5 : console.log()

const jsonData = JSON.stringify(bioData); //Task 1

// fs.writeFile('json1.json' , jsonData , (err)=>{    //Task 2
//     console.log('done');
// } );

// fs.readFile("json1.json" , 'utf-8' , (err, data)=>{  //Task  3
//     console.log(data);
// });

fs.readFile("json1.json" , 'utf-8' , (err, data)=>{     
    const orgData = JSON.parse(data);  //Task 4
    console.log(data);
    console.log(orgData);  //Task 5
});