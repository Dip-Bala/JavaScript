// Type Conversion Examples

let score = "33abc"; // A string containing a number and characters
let scoreinNumber = Number(score); // Converts the string to a number
console.log(typeof score); // Output: "string"
console.log(typeof scoreinNumber); // Output: "number"
console.log(scoreinNumber); // Output: NaN (Not a Number because the string contains non-numeric characters)

let isLoggedIn = ""; // Empty string (falsy value in JS)
let booleanIsLoggedIn = Boolean(isLoggedIn); // Converts to a boolean
console.log(booleanIsLoggedIn); // Output: false (empty string is falsy)

let someNumber = 33; // A number
let stringNumber = String(someNumber); // Converts the number to a string
console.log(stringNumber); // Output: "33"
console.log(typeof stringNumber); // Output: "string"

// Special numeric values
let value = Infinity; // Positive Infinity
let negValue = -value; // Negative Infinity
console.log(negValue); // Output: -Infinity

// String and Number Concatenation
console.log("1" + 2); // Output: "12" (number coerced to a string and concatenated)
console.log(1 + "2"); // Output: "12" (same as above)
console.log("1" + 2 + 2); // Output: "122" (left-to-right evaluation, "1" + 2 = "12", then + 2 = "122")
console.log(1 + 2 + "2"); // Output: "32" (left-to-right evaluation, 1 + 2 = 3, then + "2" = "32")

// Boolean and Number Operations
console.log(1 + true); // Output: 2 (true is coerced to 1)
console.log(1 + ""); // Output: "1" (empty string coerced to "")

// Comparison Examples
console.log(2 > 1); // Output: true
console.log(2 >= 1); // Output: true
console.log(2 < 1); // Output: false
console.log(2 == 1); // Output: false
console.log(2 != 1); // Output: true

// String and Number Comparison
console.log("2" > 1); // Output: true (string "2" coerced to number 2)
console.log("02" > 1); // Output: true (string "02" coerced to number 2)

// Comparisons with `null`
console.log(null > 0); // Output: false (null coerced to 0)
console.log(null == 0); // Output: false (no type coercion with == for null and number)
console.log(null >= 0); // Output: true (null coerced to 0)

// Comparisons with `undefined`
console.log(undefined == 0); // Output: false (undefined only equals null in loose comparison)
console.log(undefined > 0); // Output: false (undefined cannot be coerced to a number)
console.log(undefined < 0); // Output: false

// Strict Equality
console.log("2" === 2); // Output: false (strict comparison checks both value and type)

// Symbols
const id = Symbol('123'); // Creates a unique symbol
const anotherId = Symbol('123'); // Another unique symbol, even with the same description
console.log(id); // Output: Symbol(123)
console.log(anotherId); // Output: Symbol(123)
console.log(id === anotherId); // Output: false (symbols are always unique)
