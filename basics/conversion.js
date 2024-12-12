let score = "33abc"
let scoreinNumber = Number(score)
// console.log(typeof score);
// console.log(typeof scoreinNumber);
// console.log(scoreinNumber)

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

let value = Infinity
let negValue = -value
// console.log(negValue);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(1+true);
// console.log(1+"");


/*********************. comparison   ********** */
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);  //null converts into 0
// console.log(null == 0); // no conversion or coercion happen in '==' operator
// console.log(null >= 0); //null converts into 0

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// // === 

// console.log("2" === 2); //strict comparison of both value and datatype

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id); 
console.log(anotherId);
console.log(id === anotherId);
