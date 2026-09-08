//datatype conversion

//string coersion
console.log("datatype conversion");
console.log("55" + 89);
console.log("55" + true);

//number coersion

console.log("10" - 2);
console.log("10" * 2);
console.log("10" / 2);
console.log("10" % 2);
console.log("10" - true);
console.log("10" - false);
console.log(true - 5);
console.log(false - 5);
console.log(2 - "5");

//explicit conversion
console.log("explicit conversion");
let age = "20";
console.log(typeof age);
age = Number(age);
console.log(typeof age);
console.log(Number("20"));
console.log(parseInt("20"));
console.log(parseFloat("20.5"));
console.log(String(20));

//string conversion
console.log("string conversion");
console.log(String(true));
console.log(String(123));
console.log(String(123.45));
console.log((55).toString());

//Boolean conversion
console.log("Boolean conversion");
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));   
console.log(Boolean(60));
console.log(Boolean(3));
console.log(Boolean(7));

//object conversion
//stringification
console.log("object conversion");
console.log(Number({}));
console.log(Boolean({}));
console.log(String({}));

//stringification
console.log("stringification");
const person = {
    firstName: "Kalu",
    lastName: "Okocha",
    age: 25,
    role: "Driver"
};
const mainperson = JSON.stringify(person);
console.log(mainperson);
console.log(typeof mainperson);

//parsing
console.log("parsing");
const fperson = JSON.parse(mainperson);
console.log(fperson);
console.log(fperson.age);

//Datatype conversinon
let input = "42";
let convert = Number(input);
console.log(input + 8);
console.log(convert + 8);

console.log(" Code Debugging")
let myName = " Augustine"
console.log(myName.trim());
console.log(myName.length);

//Uppercase and Lowercase
console.log("Uppercase and Lowercase");
let word = "javascript";
console.log(word.toUpperCase());
let word1 = "JAVASCRIPT";
console.log(word1.toLowerCase());

//debugging challenge