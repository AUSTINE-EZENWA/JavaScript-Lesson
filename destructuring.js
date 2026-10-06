//Destructing is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a concise and readable way to extract data. 
//It means taking out values from arrays or objects and assigning them to variables in a single statement.

// Example of array destructuring
const student = {
    name: "Chika", 
    age: 35,
    course: "Computer Science"
};
//Renaming object properties
const newStudent = {
    address: "Obinagu",
    phone: "09042556664"
}
const {address: myAddress, phone: phoneNumber} = newStudent
console.log(myAddress);
console.log(phoneNumber);
    
// Destructuring the object
const {name, age, course} = student;
console.log(name);
console.log(age);
console.log(course);

const bankAccount = {
    accountBanlance: 45000,
    transaction:[]
}
const {accountBanlance, transaction} = bankAccount;
console.log(accountBanlance, transaction)

// Array destructuring 
 const numbers = [1, 2, 4]
 const [first, second, third] = numbers
 console.log(first);
 console.log(second);
 console.log(third);
 console.log(numbers)

 //skipping arrary values. Use commer in place of the skipped value
  const score = [30, 60, 80]
// skip the second value
const [score1, , score3] = score
 console.log(score);
 console.log(score1);
 console.log(score3);

 //Destructuring inside forEach()
 const transactions = [
    {
    type: "deposit",
    amount: 2000
 },

 {
    type: "withdrawal", 
    amount: 5000
 }

 ]
 transactions.forEach(({type, amount})=>{
    console.log(type);
    console.log(amount);
 })
    
    