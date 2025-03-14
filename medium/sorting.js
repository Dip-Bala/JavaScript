// sorting_concepts.js
// The .sort() method modifies an array in place and, by default, converts values into strings before sorting,
// which may lead to unexpected results
// ============================
// 1. Default `.sort()` Behavior (Incorrect for Numbers)
// ============================
const numbers = [9, 3, 12, 11, 40, 28, 5];
const sortedNumbers = numbers.sort(); // ❌ Incorrect: Sorted as strings
// console.log(sortedNumbers); // Output: [11, 3, 40, 5, 9, 12, 28]

// ============================
// 2. Correct Numeric Sorting
// ============================
//To correctly sort numbers, always provide a comparator function:
// Ascending Order: a - b
// Descending Order: b - a

const sortedNumbersCorrect = numbers.sort((a, b) => a - b);
// console.log(sortedNumbersCorrect); // ✅ Correct: [3, 5, 9, 11, 12, 28, 40]

// ============================
// 3. Sorting Strings Alphabetically
// ============================
//Strings are sorted based on Unicode values, which match alphabetical order in English.
const characters = ["Nebula", "Thanos", "Star Lord", "Groot", "Rocket", "Drax", "Gamora"];
const sortedCharacters = characters.sort();
// console.log(sortedCharacters);

// ============================
// 4. Sorting Strings in Reverse Order
// ============================
//For descending order, use .localeCompare() with swapped arguments.

const sortedReverse = characters.sort((a, b) => b.localeCompare(a));
// console.log(sortedReverse);

// ============================
// 5. Sorting Objects by a Property
// ============================
//When sorting objects, access the relevant property in the comparator function.
const books = [
  { title: "Book A", year: 2010 },
  { title: "Book B", year: 2005 },
  { title: "Book C", year: 2018 },
];
const booksSortedByYear = books.sort((a, b) => a.year - b.year);
// console.log(booksSortedByYear);
//For descending order, swap a.year - b.year with b.year - a.year.
// ============================
// 6. Sorting with Multiple Conditions
// ============================
const complexBooks = [
  { title: "Book Z", year: 2015 },
  { title: "Book X", year: 2015 },
  { title: "Book A", year: 2010 },
  { title: "Book B", year: 2018 },
];
const sortedComplexBooks = complexBooks.sort((a, b) => a.year - b.year  || a.title.localeCompare(b.title));
// console.log(sortedComplexBooks);

// ============================
// 7. Prioritizing Certain Elements While Sorting
// ============================
//Sort names so that titles like "Dr." appear first.
const names = ["Mike Smith", "Dr. Johnson", "John Doe", "Dr. Williams"];
const sortedNames = names.sort((a, b) => {
  if (a.startsWith("Dr.") && !b.startsWith("Dr.")) return -1;
  if (!a.startsWith("Dr.") && b.startsWith("Dr.")) return 1;
  return a.localeCompare(b);
});
// console.log(sortedNames);

// ============================
// 8. Sorting Mixed Numbers and Letters
// ============================
//This method ensures numbers are placed before letters while preserving relative order.
const items = ["b", "3", "a", "2", "c", "1"];
items.sort((a, b) => {
  const aIsNum = !isNaN(a);
  const bIsNum = !isNaN(b);
  if (aIsNum && !bIsNum) return -1;
  if (!aIsNum && bIsNum) return 1;
  // return 0;
  else return a.localeCompare(b);
});
// console.log(items);

// ============================
// 9. Stable vs. Unstable Sorting
// ============================
//A stable sort preserves the relative order of elements with equal values. JavaScript ensures stable sorting in modern engines (ES6+).
const unstableArr = [2, 5, 3, 4, 1, 6, 7, 8, 9, 10, 11, 12];
const stableSorted = unstableArr.sort((a, b) => a % 2 - b % 2 || a - b);
// console.log(stableSorted);

// ============================
// 10. Sorting by String Length
// ============================
// Sorting words from shortest to longest.
const words = ["banana", "apple", "kiwi", "blueberry"];
const sortedByLength = words.sort((a, b) => a.length - b.length);
// console.log(sortedByLength);

// ============================
// 11. Case-Insensitive Sorting
// ============================
//By default, sort() is case-sensitive, meaning "Apple" may be placed before "banana". To ignore case, use .toLowerCase().
// const mixedCaseWords = ["banana", "Apple", "kiwi", "blueberry"];
const mixedCaseWords = ["banana", "apple", "Kiwi", "Blueberry", "grape", "Apricot"];
const caseInsensitiveSorted = mixedCaseWords.sort((a, b) => a.localeCompare(b));
console.log(caseInsensitiveSorted);
//doesn't make much sense 
