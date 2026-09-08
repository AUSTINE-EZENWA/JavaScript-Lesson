const count = 60;
console.log(typeof count);

const isActive = true;
console.log(typeof isActive);

const message = "Hello, World!";
console.log(typeof message);

const nullValue = null;
console.log(typeof nullValue);

const undefinedValue = undefined;
console.log(typeof undefinedValue);

/* None primitive datatype*/

/* Object*/
const user = {firstName: "John", lastName: "Doe",};
console.log(user);

/* Array: use to store multiple values or list of values */
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const names = ["Uju", "Uche", "Emeka"];
console.log(names);

// for the console
let myName = "Ujunwa";
let myAge = Number(50);
let mybirthYear = 2026 - myAge;
let myHobby = "Coding";

let myFulldetails = myName + " " + myAge + " " + mybirthYear + " " + myHobby;

console.log(`Welcome ${myName}! Youe age is ${myAge} and you were born in the year ${mybirthYear}. Your favorite hobby is ${myHobby}.`);
console.log("Your were born in the year"+" "+mybirthYear);
console.log("Your favorite hobby is"+" "+myHobby);

// string concatenation
let a = 6;
let b = "4";

let c = "4";
let d = 6;
console.log(a + b); // Output: "64" (string concatenation)
console.log(c + d); // Output: "46" (string concatenation)

// number operations
let price = 100;
let quantity = 5;
let total = price * quantity;
console.log(`The Total Cost is: N${total}. Thank you for shopping with us!`);

// arithmetic operations
let x = 4;
let y = 2;
console.log("Result =:"+ x+y);
console.log("result =:"+(x+y)); // Output: 6 (addition)"

// e.g.
let firastName = "Tunde";
let LastName = "Okafor";
let fullName = firastName + " " + LastName;
console.log("Welcome"+" "+fullName+"!");

//number operations
let itemPrice = "15";
let totalPrice = itemPrice + 5;
console.log(`Your total is: N${totalPrice}`);

//Receipt Generator
let itemName = "orange";
let ItemPrice = 10;
let itemQuantity = 500;
let totalCost = ItemPrice * itemQuantity;
console.log("============= RECEIPT =============");
console.log("------------------------------------")
console.log(`Item: ${itemName}`);
console.log(`Price: N${ItemPrice}`);
console.log(`Quantity: ${itemQuantity}`);
console.log("-----------------------------------");
console.log(`Total Cost: N${totalCost}`);
console.log("====================================");
