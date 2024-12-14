const arr = [1, 2, 3, 4, 5, 6]; // Array literal
const myArr = new Array(1, 2, 4, 5, 6); // Array constructor
console.log(myArr); // Output: [1, 2, 4, 5, 6]

// Adding elements to the array
myArr.push(7); // Adds 7 to the end of the array
myArr.push(8); // Adds 8 to the end of the array
console.log(myArr); // Output: [1, 2, 4, 5, 6, 7, 8]

// Adding and removing elements from the start of the array
// myArr.unshift(9); // Adds 9 to the beginning of the array
// console.log(myArr); // Output: [9, 1, 2, 4, 5, 6, 7, 8]

// myArr.shift(); // Removes the first element of the array
// console.log(myArr); // Output: [1, 2, 4, 5, 6, 7, 8]

// Checking for elements and their positions
console.log(myArr.includes(9)); // Output: false (9 is not in the array)
console.log(myArr.indexOf(6)); // Output: 4 (position of the first occurrence of 6)

// Joining array elements into a string
const newArr = myArr.join(); // Converts the array into a comma-separated string
console.log(myArr); // Output: [1, 2, 4, 5, 6, 7, 8] (unchanged)
console.log(newArr); // Output: "1,2,4,5,6,7,8"
console.log(typeof newArr); // Output: "string"

// Using slice()
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3); // Extracts elements from index 1 to 2 (3 is excluded)
console.log(myn1); // Output: [2, 4]
console.log("B ", myArr); // Output: [1, 2, 4, 5, 6, 7, 8] (original array is unchanged)

// Using splice()
const myn2 = myArr.splice(1, 3); 
// Removes 3 elements starting from index 1 and returns them
console.log("C ", myArr); // Output: [1, 5, 6, 7, 8] (original array is modified)
console.log(myn2); // Output: [2, 4, 5] (removed elements)
