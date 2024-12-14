// Defining variables using `const` to ensure they remain immutable
const name = "Dipanwita";
const repoCount = 20;

// String Interpolation using template literals (back-ticks)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Output: "Hello my name is Dipanwita and my repo count is 20"

// Using JavaScript's String object constructor
const gameName = new String('Dipanwita-Bala'); // Creates a String object
console.log(gameName); // Logs the entire String object

// Accessing characters in a string using indexing
console.log(gameName[0]); // Output: "D"

// Exploring the prototype chain of a String object
console.log(gameName.__proto__); // Logs the prototype of the String object

// String length property
console.log(gameName.length); // Output: 14 (number of characters in the string)

// Character at a specific index
console.log(gameName.charAt(6)); // Output: "i"

// Finding the index of a character in a string
console.log(gameName.indexOf('B')); // Output: 10 (position of the first occurrence of 'B')

// Extracting a substring
const newStr = gameName.substring(0, 5); // Extracts characters from index 0 to 4 (excludes index 5)
console.log(newStr); // Output: "Dipan"

// Using `slice` to extract parts of a string
const anotherStr = gameName.slice(-9, 4); // Extracts part of the string but starts at -9
console.log(anotherStr); // Output: "" (since the indices don't make sense)

// Trimming whitespace from a string
const str1 = "    fuck off ";
const str1Trimmed = str1.trim(); // Removes leading and trailing spaces
console.log(str1); // Output: "    fuck off "
console.log(str1Trimmed); // Output: "fuck off"

// Replacing parts of a string
const url = "https://dip.com/dip%20bala";
console.log(url.replace('%20', '-')); // Replaces '%20' with '-'
// Output: "https://dip.com/dip-bala"

// Checking if a string includes a certain substring
console.log(url.includes('sundar')); // Checks if 'sundar' is in the string
// Output: false (since 'sundar' isn't in the string)

// Splitting a string into an array
const splittedStr = gameName.split('-'); // Splits the string at every '-' into an array
console.log(splittedStr); // Output: ["Dipanwita", "Bala"]
