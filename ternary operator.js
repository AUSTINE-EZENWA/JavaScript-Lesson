// Ternar Operators
const age = 17;
const adulthood = age >= 18? "Age is Adult" : "Age is is a Child";
console.log(adulthood);

// second example
const trafficLight = "Red";
const trafficAct = trafficLight === "Yellow"? "Warning" : trafficLight === "Green"? "Go" : trafficLight === "Red"? "Stop" : "Wait";
console.log(trafficAct);

//  class exercise
// create two variables; Num1 and Num2, assign them any value. Calculate the sum of Num1 and Num. Use Ternary operator to check if the sum is even or odd number
//display the following in the console
//The value of Num1 
//The value of Num2 
// the sum
// whether the sum is even or odd number

const Num1 = 4;
const Num2 = 5; 
const sumNum = Num1 + Num2;
console.log(sumNum);
const sumEvenOdd = sumNum % 2 === 0? sumNum+" "+"Is Even Number" : sumNum+" "+"is Odd number";
console.log(sumEvenOdd);

let score = 30;
let myScore = score >= 75? "Grade: A" : score >= 70? "Grade: B" : score >= 60? "Grade: C" : score >= 50? "Grade: D" : score >= 40? "Grade: P" : "Grade: F";
console.log(myScore);