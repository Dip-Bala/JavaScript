console.log("Dipanwita")
const password = 3456789
// password = 36546787 
var id = 755768
// console.log(password);
let email = "dip@gmail.com"
// console.table([id, email, password])

// const variables value is constant, block scope and can not the reassigned after and must be initialized at the time of declaration
//let is block scoped, can be reassigned
// function scoped(If declared inside a function, it's scoped to that function. If outside, it's scoped globally.)

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser


//************************* Primitive Datatypes ************************ */
// number =>  (Represents numeric values, including integers and floating-point numbers.
// Special numeric values: Infinity, -Infinity, and NaN (Not a Number).)
// bigint => (Represents integers larger than the Number type can handle (greater than 2^53 - 1)
// Created by appending n to the end of the number.)
// string => ""
// boolean => true/false. Used in conditions and decision-making.
// null => Represents an intentional absence of any value (a placeholder).
// undefined => Represents an uninitialized variable or a missing value.
// symbol => Represents a unique identifier, primarily used for object properties to ensure uniqueness.


console.log(typeof undefined); // undefined
console.log(typeof null); // object

/***************** Non-Primitive Datatypes ******************** */
//Object - A collection of key-value pairs. Keys can be strings or Symbol, and values can be any data type.
//Array - A special type of object used to store ordered collections of values.
//Function - A reusable block of code that can perform a task. Objects themselevs
// Date - Represents a specific point in time.
// Regular Expressions - Used for pattern matching and text manipulation.
let regex = /abc/;
console.log(typeof regex)

// JavaScript is dynamically typed, meaning variables can change their type:

// The typeof operator can determine the type of a value:

// String	    "Hello"	        Sequence of characters
// Number	    42, 3.14, NaN,  Infinity	Numeric values
// BigInt	    1234567890n	    Large integers
// Boolean	    true, false	    Logical values
// Undefined	undefined	    Uninitialized variable
// Null	null	No value
// Symbol	    Symbol("id")	Unique identifier
// Object	    {key: value}	Collection of properties
// Array	    [1, 2, 3]	    Ordered list of values
// Function	    function() {}	Block of reusable code
// Date	        new Date()	    Represents date/time
// Regex	    /pattern/	    Pattern matching