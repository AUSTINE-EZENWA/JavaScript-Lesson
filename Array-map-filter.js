//map is used when you want to alter every element in an array
//e.g. you want to add, subtract, divide or multiply a number with each array
const numbers = [10, 20, 40, 40, 50];
const multNum = numbers.map((number)=>{
    return number * 3

});
console.log(multNum)

//FILTER
//filter is used when you select an element in an array
const scores = [20, 30, 40, 50, 60, 70, 80];
const myScore = scores.filter((score)=>{
    return score <= 50
});
console.log(myScore);

//FINE:find is used to find the first element that satisfy a condition 
const findNumber = [10, 12, 15, 20];
const oneNumber = findNumber.find((findAnumber)=>{
    return findAnumber >= 17;
});
console.log(oneNumber);

//REDUCE: reduce is used to reduce an array to a single value
const reduceNum = [45, 70, 85, 60, 90, 55];
const value = reduceNum.reduce((total,number)=>{
    return total + number;

},0);
console.log(value);

//Average
const nums = [45, 70, 85, 60, 90, 55];

const averageNum = nums.reduce((totalScore,num1)=>{
    return totalScore + num1;

},0);
console.log(averageNum / nums.length);

//Highest number in an array
const myScores = [45, 70, 85, 60, 90, 55];

const highest = myScores.reduce((highestScore, score)=>{
    
    if(score > highestScore){
        return score;
    }
    else{
        return highestScore;
    }
    
},0);
console.log(highest);