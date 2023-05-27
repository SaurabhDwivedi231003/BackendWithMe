// here we are defining our function and we will call these function in index.js as of now

// As of now the scope of these files or functions are Private

//------------FOR EXPORTING JUST ONE FUNCTION-------------------
// const sum = (a,b) => {
//     return a + b;
// };

// const name = "SAURABH" ;

//  to make the scope public use : module.exports = name_of_func ;

// module.exports = sum; // Remember this will only work if you have only one function to execute. 


// module.exports = name;
// module.exports = sum;  exporting both function like this won't work , it will print the result of last function exported


// -----------------EXPORTING MORE THAN ONE FUNCTIONS----------------------------------------------
const sum = (a,b) => {
    return a + b;
};
const diff = (a,b) => {
    return a - b;
};

const name = "SAURABH";
// module.exports.sum = sum ;
// module.exports.diff = diff ;   // now in this way we can export multiple functions


//-------->> Now if you dont want to write multiple export again and again <<---------------------
//-----------BEST APPROACH ----------------

module.exports = { sum , diff , name }; // here in this way we can write number of function a single line.