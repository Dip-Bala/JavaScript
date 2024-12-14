function sayMyName() {
    console.log("Dipanwita");
}

// sayMyName -- reference to the function, no execution
// sayMyName() // executes the function, prints "Dipanwita"

// Function with parameters (inputs) and arguments (values passed)
function addTwoNum(num1, num2) {
    return num1 + num2;  // Returns the sum of num1 and num2
}

const result = addTwoNum(4, 5);  // Passing numbers
console.log(result);  // Output: 9

// Function with default parameters
function loginUserMessage(username = "Sam") {
    // The default value of `username` is "Sam" if no argument is passed
    if (username === undefined) {  // This block will never execute due to the default parameter
        console.log("Please enter a username");
    }
    return `${username} just logged in`;  // Returns a string message
}

console.log(loginUserMessage());  // Output: "Sam just logged in"
console.log(loginUserMessage("bala_dipanwita"));  // Output: "bala_dipanwita just logged in"

// Rest operator (collects multiple arguments into an array)
function calculatePrice(val1, val2, ...num1) {
    return num1;  // Returns all arguments after val1 and val2 as an array
}

console.log(calculatePrice(100, 200, 500, 700, 600));  // Output: [500, 700, 600]

// Passing objects to functions
const user = {
    username: "Dipanwita",
    price: 100
};

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

handleObject(user);  // Output: "Username is Dipanwita and price is 100"

// You can also pass objects directly as arguments:
handleObject({
    username: "Sam",
    price: 109
});  // Output: "Username is Sam and price is 109"

// **************** Scope *******************/

// Scope example with nested functions
function one() {
    const username = "Dipanwita";  // Variable defined in `one` function scope

    function two() {
        const website = "youtube";  // Variable in `two` function scope
        console.log(username);  // Inner function accessing outer function variable (closure)
    }

    two();  // Call the inner function
    // console.log(website);  // Error: Outer function can't access inner function variables
}

one();  // Output: "Dipanwita"

// Block scope with `if` statements
if (true) {
    const username = "dipanwita";  // Block-scoped variable
    if (username === "dipanwita") {
        const website = "youtube";  // Block-scoped variable inside nested block
        console.log(username + website);  // Output: "dipanwita youtube"
    }
    // console.log(website);  // Error: `website` is not accessible outside the block
}

// console.log(username);  // Error: `username` is not accessible outside the block

/** ********* Hoisting ******** */
// Hoisting allows function declarations to be used before they are defined
console.log(addone(5));  // Output: 6

function addone(num) {
    return num + 1;  // Works because of hoisting
}

// Function expressions (not hoisted)
const addTwo = function (num) {
    return num + 2;  // Treated as a variable assignment
};

// addTwo(5);  // Error: Cannot access `addTwo` before initialization
