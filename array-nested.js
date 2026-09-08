// const employee = {
//     name:   "Augustine",
//     age:    35,

//     contact: {
//         phone: "08035048047",
//         email:  "augustine@gmail.com",
//     },

//     job:{
//         title: "Computer Instructor",
//         department: "ICT"
//     } 
// }
// console.log(employee.name);
// console.log(employee.contact.phone);
// console.log(employee.contact.email);
// console.log(employee.job.title);
// employee.job.department = "Computer Science"
// console.log(`${employee.name} is a ${employee.job.title} in the ${employee.job.department} department`);
// delete employee.job.title;
// console.log(employee);


//execise 2 neste objects with array
const employee = {
    name:   "Augustine",
    age:    35,

    skills: ["javascript", "HTML", "CSS"],

    contact:{ 
        phone: "08035048047",
        email:  "augustine@gmail.com",
    },

    job:{
        title: "Computer Instructor",
        department: "ICT"
    } 
}
console.log(employee.name);
console.log(employee.skills[0]);
console.log(employee.skills[1]);
employee.skills[2] = "Tailwind CSS";
console.log(employee.skills[2]);
console.log(employee.skills);