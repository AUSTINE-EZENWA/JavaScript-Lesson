// Rest is use to bring element of arrays or properties of object together, unlike spread which spread them
//eg
function addNumbers(...numbers){
    console.log(numbers);
}
addNumbers(10, 30, 40, 50);

//using array methods on rest e.g.
function addAllNunmbers(...numbers){
    return numbers.reduce((total, numbers)=>{
        return total + numbers

    }, 0);

}
console.log(addAllNunmbers(10, 20, 30, 40));

// rest with normal parameters e.g.
function studentDetails(name, age, ...course ){
    console.log(name);
    console.log(age);
    console.log(course);

}
studentDetails("Augustine", 30, "JavaScript", "Mareketing", "HTMl", "CSS")

//Exercise
const fruits = ["Apple", "Banaba", "Orange"];
const moreFruits = ["Mango", "Pineapple"];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits);