//------------------>> NPM {https://www.npmjs.com/}<<---------------------------
// NPM helps to import some readymade packages to write less code / use code written by someone else.

// 'npm init'  : to initialise npm
// run above command and answer their required questions
// All thr details would be saved in package.json file which would be created automatically after answering all the question.


//--------CHALK------->>{https://www.npmjs.com/package/chalk}---------------
// CHALK : To print colored text in console.
// npm install chalk    : use this command in terminal
// we can also type : npm install chalk@[name of version]
// Example : npm install chalk@2.0.0  

// var chalk = require("chalk");
// console.log( chalk.blue.italic.underline("Hello World !"));

// use colors like red , green etc.
// use text enhancer like bold , italic , underline


//-----------VALIDATOR PACKAGE----{https://www.npmjs.com/package/validator}--------------------

// npm install validator
// Helps in form validation 
var validator = require('validator');
const res = validator.isEmail('saurabh@dwivedi.in');  //if we write anything other than { .com , .co , .in ..etc } the it will give falss.
console.log(res);
// console.log(res ? chalk.green.inverse(res) : chalk.foregroundColorNames.inverse(res));



// NOTE : remember these packages are installed locally
// It means they are accessible only inside particular folder/projects.
// To use globally we will use Global NPM Modules -->
// npm install -g <package name>    { g = global both can be used}


