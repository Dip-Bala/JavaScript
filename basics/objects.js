// // Singleton pattern is used to create a single instance of an object.
// //const jsUser = new Object();
// // Object.create is a method to create a new object with a specified prototype object (not used in this code).

// // Object literals: A simple and commonly used way to create objects in JavaScript.
// const mySym = Symbol("key1"); // Creating a unique Symbol, often used as a key in objects for uniqueness.

// const JsUser = {
//     name: "Dipanwita",           // A simple key-value pair.
//     "full name": "Dipanwita Bala",  // Key with spaces must be inside double quotes.
//     [mySym]: "mykey1",           // Symbol as a key; symbols must be in square brackets.
//     age: 18,                     // Number type property.
//     location: "Kol",             // String type property.
//     email: "diya@google.com",    // String type property.
//     isLoggedIn: false,           // Boolean type property.
//     lastLoginDays: ["Monday", "Saturday"], // Array as a property.
// };

// // Accessing object properties
// // 1st way: Using the dot operator.
// console.log(JsUser.email); // Output: "diya@google.com"

// // 2nd way: Using square brackets.
// console.log(JsUser["email"]); // Output: "diya@google.com"

// // Square brackets are necessary when accessing properties with spaces in their keys.
// console.log(JsUser["full name"]); // Output: "Dipanwita Bala"

// // Accessing the Symbol-keyed property.
// console.log(JsUser[mySym]); // Output: "mykey1"

// // Modifying object properties
// JsUser.email = "dipanwita@chatgpt.com"; // Modifies the email property.

// // Freezing the object to prevent changes (uncomment the line below to test freeze).
// // Object.freeze(JsUser); // Once frozen, the object becomes immutable (no new changes allowed).

// JsUser.email = "dipanwita@microsoft.com"; // This won't take effect if the object is frozen.
// console.log(JsUser.email); // Output depends on whether Object.freeze() was called.

// // Adding methods to the object
// JsUser.greeting = function () {
//     console.log("Hello JS user"); // Simple method that logs a greeting message.
// };

// JsUser.greetingTwo = function () {
//     // Using `this` to access other properties of the object.
//     console.log(`Hello JS user, ${this.name}`); 
// };

// // Calling the methods
// console.log(JsUser.greeting()); // Output: "Hello JS user", logs but returns undefined.
// console.log(JsUser.greetingTwo()); // Output: "Hello JS user, Dipanwita", logs but returns undefined.

// // Viewing the updated object
// console.log(JsUser);

// Creating an empty object using literal syntax (preferred way over `new Object()` for simplicity).
const tinderUser = {};

// Adding properties to the object dynamically.
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// Viewing the object structure (uncomment to log).
// console.log(tinderUser);

// Nested object example
const regularUser = {
    email: "some@gmail.com", // Simple key-value pair.
    fullname: {             // Nested object.
        userfullname: {     // Deeper nesting.
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

// Accessing nested properties using dot notation.
console.log(regularUser.fullname.userfullname.firstname); // Output: "hitesh"

// Merging objects using the spread operator.
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// Merging obj1, obj2, and obj4 into a new object using spread syntax.
const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3); // Output: {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}


// object.assign(target, source) operator is also used to merge objects
// Array of objects representing user data.
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "j@gmail.com"
    },
    {
        id: 3,
        email: "k@gmail.com"
    },
];

// Accessing a specific user's email from the array.
console.log(users[1].email); // Output: "j@gmail.com"

// Built-in object methods
// Object.keys: Returns an array of keys from the object.
console.log(Object.keys(tinderUser)); // Output: ["id", "name", "isLoggedIn"]

// Object.values: Returns an array of values from the object.
console.log(Object.values(tinderUser)); // Output: ["123abc", "Sammy", false]

// Object.entries: Returns an array of key-value pairs.
console.log(Object.entries(tinderUser)); 
// Output: [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]]

// hasOwnProperty: Checks if a property exists directly on the object.
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Output: true

// Destructuring an object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Destructuring with renaming: Extracts `courseInstructor` and renames it to `instructor`.
const {courseInstructor: instructor} = course;

console.log(instructor); // Output: "hitesh"

// JSON-like structure (example).
const jsonExample = [
    {
        "name": "hitesh",
        "coursename": "js in hindi",
        "price": "free"
    },
    {},
    {}
];

// Learning points:
// 1. Object creation: Use `{}` for creating objects.
// 2. Dynamic property addition: You can add properties to an object at runtime.
// 3. Nested objects: Access properties using dot notation.
// 4. Object merging: Use the spread operator (`...`) or `Object.assign()`.
// 5. Common object methods: `Object.keys`, `Object.values`, `Object.entries`, `hasOwnProperty`.
// 6. Destructuring: Extract values from objects easily with renaming options.


// Key learning points from this code:
// 1. Object literals are simple and effective for creating objects.
// 2. Use dot notation or square brackets to access object properties.
// 3. Symbols can be used as unique keys in objects.
// 4. You can modify or add properties and methods dynamically unless the object is frozen.
// 5. `this` refers to the object itself when used inside an object's method.
