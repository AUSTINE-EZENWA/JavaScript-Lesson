let temperature = 31; 
if(temperature > 30){
    console.log("It's a hot day");
}else if(temperature > 10){
    console.log("It's a pleasant day");
}else{
    console.log("It's a cold day");
}
//comment: The code above checks the value of the variable 'temperature' and prints a message based on its value. If the temperature is greater than 30, it prints "It's a hot day". If the temperature is between 11 and 30, it prints "It's a pleasant day". If the temperature is 10 or below, it prints "It's a cold day".

let age = 20;
let hasId = false;
if(age >= 18 && hasId){
    console.log("You are allowed to enter.");
}else{
    console.log("You are not allowed to enter.");
}
//comment: The code above checks if the user is at least 18 years old and has a valid ID. If both conditions are true, it prints "You are allowed to enter.". Otherwise, it prints "You are not allowed to enter."


let password = "1234";
if(password === "0000"){
    console.log("Password changed successfully.");
}else{
    console.log("Password is incorrect.");
}

let hour = 14; 
if(hour < 12){
    console.log("Good Mornnng!")
}
if(hour < 18 ){
    console.log("Good Afternoon")
}else{
    console.log("Good Evening")
}

let TickerPrice = 5000;
let personAge = 10;
let movieShowing = "weekend";
let moviePrice;
let childDiscount = 0.5 * TickerPrice / 100; //Children's discount
let seniorDiscount = 0.8 * TickerPrice / 100 // Elders's Discount 
let moviedayDiscount  = 0.2 * TickerPrice / 100; // Movie Day discount 

if(personAge < 18){ 
     moviePrice = TickerPrice - childDiscount;
    console.log("Your Ticket Price is "+moviePrice)
}else

if(personAge < 18 && movieShowing === "weekday"){
     moviePrice = TickerPrice - (childDiscount + moviedayDiscount);
    console.log("Your Ticker Price is " +moviePrice);
}else
if(personAge < 18 && movieShowing === "weekday"){ 
     moviePrice = TickerPrice - (childDiscount + moviedayDiscount);
    console.log("Your Ticket Price is "+moviePrice)
}
else
    if(personAge >= 70 && movieShowing === "weekday"){
         moviePrice = TickerPrice - (seniorDiscount + moviedayDiscount);
        console.log("Your TicketPrice is "+moviePrice);
}
else
    if(personAge >= 70){
         moviePrice = TickerPrice - seniorDiscount;
        console.log("Your TicketPrice is "+moviePrice);
}else{
    console.log("Your Ticke Price is "+TickerPrice);
}
