//object is a datatype use to store a collection of related data
// //creating an object
// const person = {
//     name: "John",
//     age: 20,
//     address: "Ivo"
// }
// console.console.log(person);

//creating object constructor
// const student = new Object();
// student.name = "Ogechi";
// student.course = "Law";

// console.log(student);

//Accessing the property of an object
// const plants = {
// tree: "Iroko",
// flower: "Rose",
// grass: "Elephant",
// fruits: "Apple"
// };
// console.log(plants);
// console.log(plants.flower);

// //modifying the property of an object
// plants.tree = "Mahogamy";
// plants.flower = "Lilly";
// console.log(plants);

// // Adding new property to an object
// plants.leaves = "Mango Leave"
// console.log(plants);

// // Deleting an object property
// delete plants.grass;
// console.log(plants);

// nested object
const user = {
    name: "John",
    age: 20,
    origin: "Enugu",
    birthPlace: "Lagos",
    role: "Policeman",
    address:{
        lga: "Enugu South",
        city: "Emene",
        street: "Obiagu",
        houseNumber: 10
    },
    hobbies:["swimming", "Soccer", "Cooking", "Dancing"]
}
console.log(user);
console.log(user.address);
console.log(user.address.street)
console.table(user.hobbies);
console.log(user.hobbies[1]);