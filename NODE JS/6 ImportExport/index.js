// =====================>>Now we will see how CREATE AND EXPORT OUR OWN MODULES<<=====================

// suppose we want to add two numbers we can use 
// our own module created in oper.js

// Now following normal procedure we'll first require modules
// But here we have to give a path here 


// ----------------WHEN ONLY ONE FUNCTION IS THERE ON OPER FILE TO EXPORT------------------------

// const sum =  require('./oper.js'); // here name 'sum' can be anything , but same name should be used while printing out
//console.log( sum(5,5) );

// -----------------------WHEN MULTIPLE FUNCTION HAVE TO BE EXPORTED----------------------------------

// const oper = require("./oper");
//  console.log(oper);  // In this way we are on passing one value it means now other function like sum and diff would behave as properties
// 
// console.log(oper.sum(5,5));
// console.log(oper.diff(5,5));

// again calling function with (oper.sum(5,5)); would be hectic so lets see another approach

// -----------------------ALTERNATIVE / BEST APPROACH----------------------------------

const {sum , diff , name} = require("./oper");
console.log(sum(5,5));
console.log(diff(5,5));
console.log(name);

