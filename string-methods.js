//slice method
const word = "Hello"
const sliceword = word.slice(3,5);
console.log(sliceword);

const sentence = "I am a software developer";
const slicesentence = sentence.slice(0);
console.log(slicesentence);

//charAt method
const char = "Hello";
const chara = char.charAt(3);
console.log(chara);

//length method
const amaka = "Chiamaka";
const LenAmaka = amaka.length;
console.log(LenAmaka);

//toUpperCase method
const name = "chinedu";
const nameUpper = name.toUpperCase();
console.log(nameUpper);

//toLowerCase method
const name1 = "CHINEDU";
const nameLower = name1.toLowerCase();
console.log(nameLower);

//indexOf method
const name2 = "Chinedu";
const indexName = name2.indexOf("n");
console.log(indexName);

const name3 = "Uwakwe";
const indexofName = name3.indexOf("k");
console.log(indexofName);

//firstIndexOf method
const name5 = "Chinedu is hardworking";
const firstIndexName = name5.indexOf("i");
console.log(firstIndexName);

//lastIndexOf method
const name4 = "Chinedu is hardworking";
const lastIndexName = name4.lastIndexOf("g");
console.log(lastIndexName);

//includes method
const name6 = "Chinedu is hardworking";
const includesName = name6.includes("edu");
console.log(includesName);

//replace method
const name7 = "Obi is a good neighbour";
const replaceName = name7.replace("is", "has");
console.log(replaceName);

//replacewith method
const name8 = "Chinedu is a good fighter";
const replaceWithName = name8.replace("fighter", "warrior");
console.log(replaceWithName);

//trim method
const name9 = "   Chinedu is a good fighter   ";
const trimName = name9.trim();
console.log(trimName);

//split method
const name10 = "Okonkwo is optimistic";
const splitName = name10.split(" ");
console.log(splitName);

//repeat method
const Road = "Okigwe"; 
const way = Road.repeat(3);
console.log(way);

let phrase = "I love JavaScript";
 console.log(phrase.includes("Love"));
 console.log(phrase.split(" "));

//concat method
const myName = "Chidi";
const yourName = "Igwe"
const fullNmae = myName.concat(" ",yourName);
console.log(fullNmae);

let mysentence = "Learning to code is fun"
let firstWord = mysentence.split(" ")[4];
console.log(firstWord);