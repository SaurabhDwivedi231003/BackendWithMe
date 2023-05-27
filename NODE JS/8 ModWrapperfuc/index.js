//----------MODULE WRAPPER-----------------

// A module wrapper is the code that surrounds every Node.js module. 
// It provides a way to keep the variables and functions defined in a module separate from those defined in other modules,
// preventing naming conflicts and making it easier to manage dependencies.

//Lets us understand Module Wrapper ith an example :

// const name = "SAURABH";
// console.log(name);

// the code written above is kept as private 
// how ?
// it is all because of module wrapper.
// lets have a look how our code actually looks inside module wrapper

( function(exports , require , module , __filename , dirname){
    const name = "SAURABH";
    console.log(name);
});

// sometime written as : -

( function(){
    const name = "SAURABH";
    console.log(name);
});

// because of these arguements we are able to access all the functions 
// exports , require , module , __filename , dirname


// Now if we print answer outside function then it will give an error
// lets have a look.

( function(){
    const name = "SAURABH";
    console.log(name);
});

//----TRY------
// console.log(__dirname);
// console.log(__filename);
// console.log(module);