function tipCalculator(tipPercent, billAmount){
    
    const tipPercentage = billAmount * tipPercent /100;
    const bill = billAmount + tipPercentage;
    console.log("Your Tip Percentage is "+tipPercentage);
    console.log("Your Total Bill is "+ bill);
}

function displayMessage(totalBill){
    console.log(totalBill)

}

function membersBill(bill, member){
    const ourBill = bill / member;
    console.log("Each Member's Bill is "+ourBill);
}

displayMessage("Find Below your Tip:");
tipCalculator(10, 10000);
membersBill(10000, 5);
