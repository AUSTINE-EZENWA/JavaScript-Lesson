//random number generation 
const minNumber = 100;
const maxNumber = 9000
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
 console.log(randomNumber);

 console.log(Math.floor(Math.random() * (100000)) + 1);

 console.log(Math.round(4.5));
 console.log(Math.floor(4.9));
 console.log(Math.ceil(4.1));


 let num = 7;
 console.log(Math.max(num, 10, 4));
 console.log(Math.min(num, 10, 4));

 let randomScore = Math.floor(Math.random() * 5) + 1;
 console.log(randomScore);