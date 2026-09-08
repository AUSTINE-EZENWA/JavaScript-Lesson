const fruits = ["Orange", "Banana", "Apple", "Mango"]
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
    // console.log(`${i+1}.${fruits[i]}`)
}

// for of loops
const names = ["Hope", "James", "Mike","Prince"]
for(const name of names){
    console.log(name)
    
}
const numbers = [10, 20, 30, 40, 50];
for(let n = 0; n < numbers.length; n++){
    console.log(`${n+1}. ${numbers[n]}`);
}
// const numbers = [10, 20, 30, 40, 50];
// for(let number of numbers){
//     console.log(number);
// }

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


