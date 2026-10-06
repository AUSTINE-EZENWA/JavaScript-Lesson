//ananymous function is a function without a name. 
//e.g we assign ananymous function to a variable so that we can call it
const greet = function(){
    console.log("Hello! Welcome")
}
greet();
//Why use ananymous function? It is used when we need a function temporarily e.g.
setTimeout(function(){
    console.log("Hello! After 2 seconds");

},2000);

//Arrow function e.g.
const multiply = (a,b)=> a * b;
    console.log(multiply (5, 6));

//Arrow function with forEach()
const numbers = [5,  10, 20, 30];
numbers.forEach(number => {
    console.log(number);
    
});
//Arrow function with map()
const numbersMap = [5,  10, 20, 30];
const mapNumbers = numbersMap.map(numbersMap =>{
    return numbersMap * 3;
})
console.log(mapNumbers);

//Arrow function with filter() example 
const child = [3, 6, 8, 15, 18, 20]; 
const adult = child.filter(age => age >= 18)
    console.log(adult)


const filterPerson = [3, 6, 8, 15, 18, 20]; 
const filterAdult = filterPerson.filter((age) =>{
    return age <= 15;

})
console.log(filterAdult)
    
