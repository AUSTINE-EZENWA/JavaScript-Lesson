//recipt Generator for a customer
// let customerName = prompt("Enter your name");
// let item = prompt("Enter the name of the Item");
// let itemPrice = Number(prompt("Enter the price of the Item"));
// let itemQuantity = Number(prompt("Enter the Quantity of the Item"));
// let price = (itemPrice * itemQuantity);
// let totalPrice = Math.round(price);
// let itemDiscount = (0.6 * totalPrice  / 100);
// let discount = Math.round(itemDiscount);
// let grandtotal = (totalPrice - discount);

// alert(`You Received a discount of N${discount} ,a 1% on your purchase`);
// alert(`TOTAL PRICE IS: N${totalPrice}`)
// alert(`============= RECEIPT =============
//     ------------------------------------
//     CUSTOMER NAME: ${customerName}
//     ITEM: ${item} 
//     PRICE: N${itemPrice} 
//     QUANTITY: ${itemQuantity}
//     TOTAL PRICE: N${totalPrice}
//     DISCOUNT: N${discount}
//     GRAND TOTAL: N${grandtotal}
//     =======THANK YOU FOR YOUR PATRONAGE=======`)

    //Code debugging
    // let userAge = Number(prompt("Enter your age?"));
    // let nextYearAge = userAge + 1;
    // alert(`Next year you will be ${nextYearAge} years old.`);

    //Part 4 creating Username 
    let userName = prompt("Enter your name");

    //convert what is user entered to uppercase
    let myUserName = userName.toUpperCase();

    let favouriteNumber = prompt("Enter your favourite Numbber");

    //convert what is user entered to number 
    let myFavouriteNumber = parseInt(favouriteNumber);

    //concatenate myUserName and myFavouriteNumber
    let userDetails = myUserName + myFavouriteNumber;

    alert(`my User Name is: ${userDetails}`);