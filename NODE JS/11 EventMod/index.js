//Events Module
// Node.js has a built-in module , called "EVENTS".

//Here we can create , listen and fire for your own events.

// EX 1 : Registering for the event to be fired only one time using once.
// EX 2 : create  an event emitter instance and register a couple of callbacks.
// Ex 3 : Registering for the event with callback parameters.


//--------------------TWO WAYS TO CALL EVENTEMITTER---------------------------

// First one  {mostly we use this one}
// const EventEmitter = require('events');
// const event = new EventEmitter();

// Second one
// const event = require('events');
// const EventEmitter = new event.EventEmitter();


const EventEmitter = require('events');
const event = new EventEmitter();

//=================================================================

// event.on('sayMyName' , ()=>{
//     console.log('Your Name is SAURABH');
// });

//--------------------------

// event.on('sayMyName' , ()=>{
//     console.log('Your Name is BANNU');
// });
                                                        //if you will uncomment these two then you will see that multiple function can be called by single call.
// event.on('sayMyName' , ()=>{
//     console.log('Your Name is TONU');
// });

//--------------------------------
// event.emit('sayMyName'); //remember this should be written after event.on()

//==================================================================

/**************************** */

event.on('checkpage' , (sc,msg)=>{
    console.log(`Status code is ${sc} and the page is ${msg}`);
});
event.emit('checkpage' , 200 , "ok" );

/********************************************/