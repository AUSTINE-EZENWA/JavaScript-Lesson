// Spread and Rest Syntax
// spread is used to spread or copy and element of an array or property of an object to somewhere else. W
// Rest is the opposite of Spread use to gather element of an array or object properties together.Both spread and rest uses (...) as syntax

//example with an array
const fruits = ["Apple", "Mango", "Orange", "Banana"];
const newFruits = [...fruits];
console.log(newFruits);

// combining arrays
const fruitsOne = ["Apple", "Mango", "Orange", "Banana"];
const fruitsTwo = ["Guava", "Pear", "Cashew", "Lemon"];
const allFruits = [...fruitsOne, ...fruitsTwo];
console.log(allFruits);

//adding new elements using sprad
const numbers = [10, 15, 20, 25];
const newNumbers = [6,...numbers, 40]
console.log(newNumbers)

// spread with objects
const student ={
    name: "Chika",
    age: 20
};

const newStudent ={
    ...student,
 //adding property to a copied object
    course: "Economics",
//updating property of a coppied object
    age: 40
}
console.log(newStudent)

