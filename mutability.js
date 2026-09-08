// Mutability in JavaScript

// Objects and arrays are mutable, meaning their contents can be changed even if they are declared with const. e.g array or object declared with const can have its properties or elements modified, but the variable itself cannot be reassigned to a new array or object.

//array
const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);

const person = {name: "Chika", age: 20};
person.role = "Driver";
console.log(person);

const letters = ["a", "b", "c", "d"];
letters.pop();
console.log(letters);

//primitive data types are immutable, meaning their values cannot be changed once they are created. If you want to change the value of a primitive data type, you need to create a new variable with the new value.
let name = "Chika";
name = "Kalu";
console.log(name);

const myname = "Okeke";
let fname = myname.toUpperCase();
console.log(fname);

//string methods
