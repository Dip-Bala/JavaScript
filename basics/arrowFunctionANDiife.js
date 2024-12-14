const user = {
    username: "Dipanwita",  // Property of the object
    price: 999,          // Another property

    // Method inside the object
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // `this` refers to the current object (user)
        console.log(this); // Logs the entire `user` object
    }
};

// Calling the method and observing the behavior of `this`.
user.welcomeMessage(); // Output: "hitesh , welcome to website" and the `user` object

// Changing the `username` property dynamically
user.username = "sam";
user.welcomeMessage(); // Output: "sam , welcome to website"

// Behavior of `this` in the global context
console.log(this); // In a browser, it logs the `window` object. In Node.js, it's an empty object.

// Regular function and `this`
function chai() {
    let username = "hitesh";
    console.log(this.username); // `this` does not refer to the function's local context in a regular function
}

chai(); // Output: undefined (as `this` is global and has no `username` property)

// Anonymous regular function assigned to a variable
const chaiFunction = function () {
    let username = "hitesh";
    console.log(this.username); // `this` still points to the global object
};

// Arrow function and `this`
const chaiArrow = () => {
    let username = "hitesh";
    console.log(this); // Arrow functions do not have their own `this`, so it inherits `this` from the surrounding lexical scope
};

chaiArrow(); // Output: global `this` (browser: `window`, Node.js: empty object)

// Arrow function examples
const addTwo = (num1, num2) => {
    return num1 + num2; // Explicit return
};

// Alternate shorthand versions:
const addTwoCompact1 = (num1, num2) => num1 + num2; // Implicit return without braces
const addTwoCompact2 = (num1, num2) => (num1 + num2); // Explicit use of parentheses
const addTwoCompact3 = (num1, num2) => ({username: "hitesh"}); // Returning an object (requires parentheses)

console.log(addTwo(3, 4)); // Output: 7

// Example array
const myArray = [2, 5, 3, 7, 8];

// `.forEach()` is used for iterating over an array (uncomment below to try)
// myArray.forEach((value, index) => console.log(value, index));

// Immediately Invoked Function Expression (IIFE)
(function chai(){
    console.log(`DB CONNECTED`); // Named IIFE logs a message immediately
})(); // Immediately invoked

// Another IIFE with arguments
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); // Using argument in IIFE
} )('Dipanwita'); // Passes 'Dipanwita' as an argument

// Key Learning Points:
// 1. `this` inside an object method refers to the object itself.
// 2. `this` in a regular function depends on how the function is called.
// 3. Arrow functions do not have their own `this`, they inherit it from the surrounding context.
// 4. IIFE is a function that runs as soon as it's defined. Use `();` to invoke immediately.
// 5. Use `forEach()` for iterating arrays and arrow functions for concise syntax.
