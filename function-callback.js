// function sumTwoNumbers(num1, num2){
//     return num1 + num2
// }

// function subTwoNumbers(num1, num2){
//     return num1 - num2;

// }
// function getResult(cb, num1, num2){
//     const result = (num1, num2);
//     console.log(result);
//     cb();
// }

// getResult(sumTwoNumbers, 100, 200);
// getResult(subTwoNumbers,200, 100);

function multiplyNumbers(a, b){
    return a * b;
}

function divideNumbers(a, b){
    return a / b;
}

function myResult(me, a, b){
    const myanswer = me(a, b);
    console.log(myanswer);
  

}
myResult(multiplyNumbers, 5, 2)
myResult(divideNumbers, 10, 5);