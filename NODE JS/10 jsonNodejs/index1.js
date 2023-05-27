// JSON stands for JavaScript Onject Notation
// JSON is a lightweight format for storing and transporting data.
// JSON is often used when data is sent from server to webpage.

const bioData = { 
    name : "Saurabh",
    age  :  19,
    city : "Bhopal"
};
// console.log(bioData.name);

//---------TWO methods are there in JSON------------
// 1.PARSE
// 2.STRINGIFY


// 1. STRINGIFY : convert normal data into JSON format.
const jsonData =  JSON.stringify(bioData);
console.log(jsonData);
// OUTPUT : {"name":"Saurabh","age":19,"city":"Bhopal"}
// console.log(jsonData.name); this is not a correct way and will throw error.



// 2. PARSE : convert JSON data into normal string format.
const objData = JSON.parse(jsonData);
console.log(objData);
// OUTPUT : { name: 'Saurabh', age: 19, city: 'Bhopal' }

