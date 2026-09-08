/*Not (!) operator*/
const fname = "Mike Uche";
const lname = "Oko Amadi"
console.log(fname !== lname);

/*AND (&&) operator*/
const num1 = 2;
const num2 = 1;
console.log(num1 && num2);

/*OR (||) operator*/
const num3 = 5;
const num4 = 4;
console.log(num3 || num4);

/*use case*/
const num5 = 5;
const num6 = 4;
if (num5 % num6 === 0 && num5 > num6) {
    console.log(true);
} else {
    console.log(false);
}
/*nullish coalescing */
const a = 0;
const b = "Hello World";
const c = null;
console.log(a || b && c);

/*example 1  */
const username = undefined;
const defaultName = "Guest";
console.log(username || defaultName);

/*example 1  */
const value1 = null;
const value2 = 100;
const value3 = "Hello";
console.log(value1 || value2 && value3);

