//for loop
// for(let count =10; count >=1; count--){
//     console.log(count+":"+"Austine");
// }

// for(let num = 0; num <=50; num++){
//     if(num % 2 ===0){
//         console.log(num);

//     }
// }

// // loop for arrays
// const fruits = ["Orange", "Mango", "Pawpaw", "Banana"];
// for(i = 0; i < fruits.length; i++ ){
//     console.log(fruits[i]);
// }

// //wile loop
// let count = 1;
// while(count <= 10){
//     console.log(count);
//     count++
// }

// let num = 1;
// while(num <= 10){
//     console.log(num+":"+"Austine");
//     num++;
// }
//do while loop

let myNumber = 0;

do{
    console.log(myNumber);
    myNumber++;
}
while(myNumber <=10)

//for of loop
const fruitTypes = ["Mango", "Orange", "Guava", "Banana", "Apple"]
    for(let fruit of fruitTypes){
        console.log(fruit);
    }

//exeample 2 of for of loops
const names = ["Amara", "Chima", "Ebere", "Ukandu", "Chidi"]
for(let myName of names){
    console.log(myName);
}

//for in loop
const car = {
    make: "Toyota",
    model: "2024",
    year: "2026"    
}
for(const engine in car){
    console.log(engine)
}