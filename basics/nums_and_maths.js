// simple declaration
const score = 400
//as object 
const balance = new Number(100.567);
// console.log(score);
// console.log(balance);

// console.log(typeof balance.toFixed());
// toFixed() converts a number to a string, rounded to a specified number of decimals:
// console.log(balance.toString().length);

// console.log(balance.toPrecision(4));

const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN')); //adds commas to make it more interpretable

/******************** Math ******************* */

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);
// console.log(Math.floor(0.999 * 20));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)