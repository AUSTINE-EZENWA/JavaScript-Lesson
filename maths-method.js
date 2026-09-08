//maths Methods

//round up
const num1 = 4.2; 
const answer = Math.round(num1);
console.log(answer);

//floor 
const num2 = 4.9; 
const answer2 = Math.floor(num2);
console.log(answer2);

//cell 
const num3 = 5.0; 
const answer3 = Math.ceil(num3);
console.log(answer3);

//max 
const Maxy = (3,2,8);
const maxAnswer = Math.max(Maxy)
console.log(maxAnswer);

//min
const mini = (0,4,7,2);
const miniAnswer = Math.min(mini);

//pow
const numPower = 4;
const raisePower = Math.pow(numPower, 2);
console.log(raisePower);

//Sqrt
const squareRoot = 49;
const sqaure = Math.sqrt(squareRoot);
console.log(sqaure);


console.log("STUDENT SCORE WITH BONUS SCORE AND ROUNDED SCORE");
let name = "Grace" //student name
let originalScore = 89.5; //student original score
let minNumber = 0; //minimum random score
let maxNumber = 5; //maximum random score
let randomScore = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber); //random score between 0 and 5
let bonusScore = originalScore + randomScore; //student bonus score
let roundScore = Math.round(bonusScore); //student rounded score
console.log("Student Name: " + name); //print student name
console.log("Student Original Score: " + originalScore); //print student original score
console.log("Student Random Score: " + randomScore); //print student random score
console.log("Student Bonus Score: " + bonusScore); //print student bonus score
console.log("Student Rounded Score: " + roundScore); //print student rounded score


