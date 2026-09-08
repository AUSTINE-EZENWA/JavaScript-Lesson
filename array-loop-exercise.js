// Use a loop to calculate the total:
// 10 + 20 + 30 + 40 + 50 = 150 
// let total = 0;
// for(let i = 10; i <= 50; i +=10){
//     total +=i;
//     console.log(total);
// }

// let num = [10, 20, 30, 40, 50];
// let total = 0; 
// for(j = 0; j < num.length; j++){
//     total += num[j];
//     console.log(total);
// }


// Use a loop to count how many students scored 50 or above.
// [45, 78, 92, 34, 67, 88];

const scores = [45, 78, 92, 34, 67, 88];
let count = 0;
for(let i = 0; i < scores.length; i++){
    if(scores[i] >= 50){
        count++;
        console.log(count);


    }
}

// modify the code to print student who score below 50
console.log("Score below 50")
const scores1 = [45, 78, 92, 34, 67, 88];
let count1 = 0;
for(let i = 0; i < scores.length; i++){
    if(scores[i] < 50){
        count1++;
        console.log(count1);


    }
}

// Challenge
// Try this one without my help:
// const numbers = [5, 10, 15, 20, 25];
// Write a program that calculates the sum of all the numbers, then prints:

const numbers = [5, 10, 15, 20, 25]
let sum = 0;
for(let a = 0; a < numbers.length; a++){
    sum += numbers[a];
  
    console.log(sum);
}
console.log("This is the final answer")
console.log(sum);
