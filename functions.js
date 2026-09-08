// defining a function 
function welcomeBack(){
    console.log("Welcome Father")
}
welcomeBack();
welcomeBack();

/*
- Function declaration 
- Ananymouse 
- Arrow functions
*/
getSum();

function getSum(){
    const num1 = 30
    const num2 = 50
    const num3 = num1 + num2;
    console.log(num3);
    console.log(num2 - num1)
    console.log(num3 * num1);
}
getSum();

function getEvenumbers(){
    for(let even = 0; even <=20; even++){
        if(even % 2 === 2){
            console.log(even);
        }
    }

}
getEvenumbers();

//function with return keywords
function stringWord(){
    return "myString";

    //assign the function to a viariable
}
    const getString = stringWord();
    console.log(getString);

    function addNumbers(){
        const mynum1 = 40;
        const myNum2 = 20; 
        return mynum1 + myNum2;

    }
    function displayResult(){
        const myResult = addNumbers();
        console.log(myResult);
    }
        displayResult();

// e.g 3
function raisePower(){
    const base = 2 
    const power = 4
    return Math.pow(base, power);
}
const  myExponent = raisePower();
console.log(myExponent);

//functions with parameters
function sumNumbers(numb1, numb2){
    return numb1 + numb2;

}
console.log(sumNumbers(3, 4));
console.log(sumNumbers(6, 10))
console.log(sumNumbers(8, 2));

//e.g 
function areaTriangle(length, breadth){
    return length * breadth;

}
const Area = areaTriangle(5, 7);
console.log(Area);

//class activity
function threeNumbers(p1, p2, p3){
    const price = 5000 + 2000 + 6000;
    const Delivery = price >= 10000? console.log("Free Delvery") : console.log("Not Free Delivery")

}
threeNumbers();

