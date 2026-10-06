// Callback function is a function that is passed into another function as an argument, so that the other function can all it at any time. 
//example 
function greet(name){
    console.log(`hell ${name}`)
}
function processName(name){
    name("Augustine")
}
processName(greet);

//example 2
function first(one){
    console.log("First Function")
    one();
    
}
function second(){
    console.log("Second Function")
}
first(second);

//callback with ananymous function

function processNumber(callbak){
    callbak(10);
}
processNumber(function (numbers){
    console.log(numbers * 2)
});

// callback with arrow function
function numberProcess(call){
    call(10);
}
numberProcess((myNumber)=>{
    console.log(myNumber * 4);
});
numberProcess(myNumber => console.log(myNumber + 100));

//callback with two parameters
function calculate(callback, num1, num2){
    const calcNumber = callback(num1,num2);
     console.log(calcNumber);
}
function add(a, b){
    return a * b;
}
calculate(add, 10, 20);
calculate(add, 30, 70);

// callback using arrow function
function calculateDigits(digit, num3, num4){
     console.log(digit(num3, num4));
}
 calculateDigits((a, b) => a + b, 5, 15);

 //exercise
function calculateEx(callback, x1, x2){
    const answer = callback(x1, x2)
    console.log(answer)
}
function doCalc(c, d){
    return c + d;
}
calculateEx(doCalc,50, 30)