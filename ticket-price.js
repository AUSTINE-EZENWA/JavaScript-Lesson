let TicketPrice = 5000;
let personAge = 5;
let movieShowing = "weekday";
let moviePrice;
let childDiscount = 5 * TicketPrice / 100; //Children's discount
let seniorDiscount = 10 * TicketPrice / 100 // Elders's Discount 
let moviedayDiscount  = 3 * TicketPrice / 100; // Movie Day discount

if(personAge < 18 && movieShowing === "weekday"){
     moviePrice = TicketPrice - (childDiscount + moviedayDiscount);
    console.log("Your Ticket Price is " +moviePrice);
}else
if(personAge < 18){ 
     moviePrice = TicketPrice - childDiscount;
    console.log("Your Ticket Price is "+moviePrice)

}else
    if(personAge >= 70 && movieShowing === "weekday"){
         moviePrice = TicketPrice - (seniorDiscount + moviedayDiscount);
        console.log("Your TicketPrice is "+moviePrice);
}
else
    if(movieShowing === "weekday"){
         moviePrice = TicketPrice - moviedayDiscount;
        console.log("Your TicketPrice is "+moviePrice);
}
else
    if(personAge >= 70){
         moviePrice = TicketPrice - seniorDiscount;
        console.log("Your TicketPrice is "+moviePrice);
}else{
    console.log("Your Ticket Price is "+TicketPrice);
}
