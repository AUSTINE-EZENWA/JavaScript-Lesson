// // function practice (String)
// function greet(name){
//     console.log(" Good Day! "+name);
// }

// greet("Ifeoma");``
// greet("Oluchi");

// //function practice (Number)
// function addNumbers(a, b){
//     console.log(a + b);
// }

// addNumbers(5, 5);
// addNumbers(2);

// function sayHi(){
//     console.log("Hi Dear")
// }
// console.log("Before calling a function");
// sayHi();
// console.log("After calling a Function");


// function Area of a Triangle
function calculateArea(length, width){
    console.log(length * width);

}
function  displayMessage(message){
        console.log(message);
    }

displayMessage("Area of a Triangle");
calculateArea(4, 3);

function orderFood(callback){
    console.log("Your Food is been prepared")
    callback();
}
function notifyCustomer(){
    console.log("Your Food is Ready")
}

orderFood(notifyCustomer);