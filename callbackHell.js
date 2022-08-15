// callback plays an important role to writing asynchronous code in js

// example
//simply callback means call me back later
console.log("hello 1");

setTimeout(function () {
    console.log("hello 2");
}, 1000);

console.log("hello 3");
