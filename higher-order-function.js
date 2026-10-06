//higher order function is a function that takes another function as an argument or returns a function as a result. Example of higher order function is map, filter, reduce, etc.
function greet(name){
   console.log(`Hello ${name}`);
}
function greetUser(callback1){
     callback1("Augustine");
}
greetUser(greet);

//higher order function with forEach
const numbers = [10, 20, 30, 50]; 
const result = numbers.reduce((total, number)=>{
   return total + number/ numbers.length;
},0);
console.log(result);

//higher order function and callback
function doSomething(){
   console.log("My name is Augustine")

}
doSomething();

function greet(name){
   console.log(`Your name is ${name}`)
}
function getGreeting(callbback){
   callbback("Augustine");
}
getGreeting(greet);

//Different operations

function calculate(a, b, callback){
   return callback(a, b);
}

 const total = calculate(9, 5,(a,b) => {
   return a * b;

 });
console.log(total);

function calculateAll(num1, num2, operation) {
    return operation(num1, num2);
}
//Now we can give it different operations. Addition
const nresult = calculateAll(10, 5, (a,b) => {
    return a - b;
});

console.log(nresult);

function processNumber(newNum, numberProcess){
   return numberProcess(newNum)
}
const processResult = processNumber(24,(a)=>{
   return a + 4

})
console.log(processResult)

