// callback plays an important role to writing asynchronous code in js
//callback hell is also known as pyramid of doom

// example
//simply callback means call me back later

//! 1. issues with callbacks: 
// a. callback hell
// b. inversion of control


console.log("hello 1");

setTimeout(function () {
    console.log("hello 2"); //inversion of control here we are giving control of function to setTimeout api
}, 1000);

console.log("hello 3");
