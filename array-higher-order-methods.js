const strings = ['a', 'a', 'c', 'd', 'e'];
    strings.forEach((character, index)=>{
    console.log(character, index)
});



//forEach() method: Allows us iterate through each method of an array and do something
// forEach() method does not imutate the original array
// It does not return a new array
//syntax: for array name. forEach(>=) method then callback inside the method parenthesis
students = [
    {name: "James", 
    course: "Computer Science",
    age: 19},

    {name: "Chidi", 
    course: "Geography",
    age: 22},

    {name: "Amara", 
    course: "Mass Communication",
    age: 25},
    ];
    const studentNames = students.map((student)=>{
        return student.name

    });
    console.log(studentNames);
//    students.forEach(student => console.log(
//     `My name is ${student.name [index]}, 
//      My field of Study is ${student.course}. 
//      I am ${student.age} years old`))

    //  students.forEach((student, index)=>{
    //     console.log(`${index +1} My name is ${student.name} I am studying ${student.course} and I am ${student.age} old`)

    //  });
     students.forEach((student)=>{
        if(student.age >= 21){
            console.log(student.name + " is " + student.age + " years old")
        }

     });

// const number = [5, 10, 15, 20, 25];
// number.forEach(function(num){
//     console.log(num);
// });

// //using arrow function
// const score = [10, 20, 30, 40, 50];
// score.forEach((myscore, index) => {
//     console.log(`My Score is: ${myscore} at Index: ${index}`);
    

// });

// const fruits = ["Orange", "Guava", "Mango", "Apple"]
// fruits.forEach(myfruits => console.log(`${myfruits} is My Favourite`))