/*
var 
*/
var fullName = "John Doe";
console.log(fullName);

/*
let 
*/
let cout = 10;
console.log(cout);

/*const 
*/
const pi = 3.14;
console.log(pi);

const age = 10;
const name = "Uche";
console.log(age);
console.log(name);

let Favouritenumber; 
Favouritenumber = 200;
console.log((Favouritenumber));


//Getting input from the user
// let userName = prompt("What is your name?")
// let userAge = Number (prompt("How old are you?"))
// let birthYear = 2026 - userAge;
// let userHobby = prompt("What is your hobby?");

// alert("Welcome"+" "+userName+"!"+" "+"You were born in the year"+" "+birthYear);
// alert(userName+" "+"Your favorite hobby is"+" "+userHobby);

//recipt Generator for a customer
let customerName = prompt("Enter your name");
let item = prompt("Enter the name of the Item");
let itemPrice = Number(prompt("Enter the price of the Item"));
let itemQuantity = Number(prompt("Enter the Quantity of the Item"));
let price = (itemPrice * itemQuantity);
let totalPrice = Math.round(price);
let itemDiscount = (0.6 * totalPrice  / 100);
let discount = Math.round(itemDiscount);
let grandtotal = (totalPrice - discount);

alert(`You Received a discount of N${discount} ,a 1% on your purchase`);
alert(`TOTAL PRICE IS: N${totalPrice}`)
alert(`============= RECEIPT =============
    ------------------------------------
    CUSTOMER NAME: ${customerName}
    ITEM: ${item} 
    PRICE: N${itemPrice} 
    QUANTITY: ${itemQuantity}
    TOTAL PRICE: N${totalPrice}
    DISCOUNT: N${discount}
    GRAND TOTAL: N${grandtotal}
    =======THANK YOU FOR YOUR PATRONAGE=======`)
