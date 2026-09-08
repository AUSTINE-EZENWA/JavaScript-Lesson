function calculateKelvin(tempdegree){
return 273 + tempdegree
}

const tempKelvin = calculateKelvin(32);
console.log(tempKelvin)


// Ananymous fuction
const kelvinCalc = function(celciusCalc){
    console.log("273F is "+273 / celciusCalc+" Degree Celsius")

}

const subNumbers = function(a, b){
    console.log(a - b);
}
kelvinCalc(35)
subNumbers(10, 5)

//Object
const person = {
    name: "James Ike",
    age: 21,
    bithYear: function(){
        return new Date().getFullYear() - this.age
    }
}
console.log(person.bithYear());


const bmiCalculator = function(h, w){
return w /(h ** 2);
}

console.log(bmiCalculator(70, 1.5));

//Arrow function sart with open and close curly brases
{
    const addNumber = (numb1, numb2) => numb1 + numb2;
console.log(addNumber(10, 10));
}

