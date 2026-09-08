const student = {
    name: "James",
    age: 21,
    course: "Computer Science",
    score: 75
};
console.log(student);
student.score = 85; //change the property "score" value from 75 to 85.
student.Department = "Applied Science" //Add a new property to the object.
student.School =  "Aus-Tech"
delete student.Department //delete the property "Department" from the object.;
console.log(student);
console.log(`${student.name} is a ${student.course} student at ${student.School} and the Score is ${student.score}`) 

//Exercise: 
const car = {
    Brand: "Toyota",
    Model:  "Camry",
    Year:   2020,
    Color:  "Black",
    Price:  15000000
}

console.log(car.Brand);
console.log(car.Model);
car.Color = "white";
car.Owner = "Augustine"
console.log(car);
console.log(`I own a ${car.Color} ${car.Brand} ${car.Model}`)

const phone = {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 850000,
    color: "Black"
};
console.log((phone.brand));
console.log(phone["model"]);
const property = "price"
console.log(phone[property]);
phone.color = "Blue";
console.log(phone.color);
console.log(`I have a ${phone.color} ${phone.brand} ${phone.model} I bought it ${phone[property]}`)