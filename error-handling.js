//Error handling allows us to handle errors in a graceful manner. It allows us to catch errors and take appropriate action instead of crashing the program. In JavaScript, we can use try-catch blocks to handle errors.
//The try block contains the code that may throw an error, and the catch block contains the code that will be executed if an error occurs. We can also use the finally block to execute code that will run regardless of whether an error occurred or not.
//Example of error handling in JavaScript:
try{
    console.log(name);
}
catch(error){
    console.log("Name not declared")

}

const age = 17;
try{
if(age < 18){
    throw new Error("You must be 18 years or above")
}
    console.log("Access granted")
}
catch(error){
    console.log(error.message)

}

// try, cartch, and finally blocks can be nested within each other to handle errors at different levels of the code. This allows for more granular error handling and better control over the flow of the program. Example of nested try-catch-finally blocks:
try{
   console.log("trying"); 
}
catch(error){
    console.log("An error occurred")
}
finally{
    console.log("This will always run")
}

try{
    console.log("This program test for error")

}
catch(error){
    console.log("Something Went Wrong")
}
finally{
    console.log("The program finally end")
}

const userName = "";
const Password = "";
try{
if(userName === "" && Password === ""){
    console.log("Username is required")
}
else{
     console.log("Logg in Successful")
}

}
catch(error){
    console.log(error.message)

}

const students = [
   {
     name: "Uchenna",
     age: 20
   },
   {
    name: "Chukwudi",
    age: 29
   },
   {
    name: "Okechukwu",
    age: 33
   }
];
try{
 students.forEach((student)=>{
    console.log(`${student.name} is ${student.age} years old`)
 });
}
catch(exception){
    console.log("An error occurred:", exception.message);

}

try{
    const data = JSON.parse('{"name":"James"}');
    console.log(data.name);
}
catch(error){
    console.log("invalid JSON")

}
