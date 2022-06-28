// 3 ways to declare the function 

// user defined function - function statement
function addition() {
    var a = 6;
    var b = 5;
    var c = a + b;
    console.log("total is" + c);
};
addition(); // to call function directly 


// function constructor - it will create a new function object
// it is used when we need to create many similar objects 
function Add() { // if we have to return it as a 
    this.a = 5;
    this.b = 6;
    this.c = this.a + this.b;
    return this.c
};
// creating object of a function 
var addedVal = new Add(); // new is used to create an new empty anonymous object
var addedVal1 = new Add();
addedVal.prototype.func = function () {
    console.log("The sum is " + this.c);
}
console.log(addedVal); // it creates an object like {a:5, b:6, c:11}
console.log(addedVal.c); // without new keyword it returns undefined as it doesnt return an object
addedVal.func();

// define a function inside an expression
var addFunc = function () {
    var a = 5;
    var b = 6;
    var c = a + b;
    return c;
};
console.log(addFunc());

// hello there
