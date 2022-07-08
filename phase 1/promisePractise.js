// promise with resolve and reject
let myPromise = new Promise(function(myResolve, myReject){
    x = 5;

    if(x == 10){
        myResolve("ok") // if x == 10, it is ok and proceeds to function myDisplay(value)
    } 
    else {
        myReject("error") // without error block the function myDisplay1(error) wont be executed
    }
});

function myDisplay(some) {
    console.log("Hello how are you");
};

function myDisplay1(some) {
    console.log("error pls check value of x");
};

myPromise.then(function(value){
    myDisplay(value)
},
function(error){
    myDisplay1(error)
}
);

// promise with only resolve 
let myPromise1 = new Promise(function(myResolve, myReject){
    setTimeout(() => {
        myResolve("Hello there!") // this means if there is no error, then carry out setTimeOut
    }, 3000);
}); 

// to use the promise
myPromise1.then(function(value){
    console.log(value) // this value is the return from myResolve which is Hello there after 3 sec 
    // you can pass in a function like 1st example or console.log the value 
});

// using async keyword
function myDisplayer(some) {
    console.log("Hello there")
};

async function myFunc(){
    return Promise.myResolve("Hello")
};

myFunc().then(function(value){
    myDisplayer(value)
}, 
    function(error){
        myDisplayer(error)
});