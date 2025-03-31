// ********* Map ********//

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

// Map by passing an Array to the new Map() constructor:
// const fruits = new Map([
//     ['apples', 300],
//     ['grapes', 200],
//     ['litchi', 400]
// ]);
// console.log(fruits.get('apples'));

// add elements to a Map with the set() method:
const map = new Map();
map.set('Diya', 0);
map.set('Totto', 3);

// console.log(map.get('Diya'));
// Maps are Objects
// console.log(typeof(map))
// console.log(fruits instanceof Map);
// console.log(map.size)
// console.log(map.has('Totto'))
// console.log(fruits.delete('litchi'))
// console.log(fruits)
// Properties
// Directly iterable
// Have a size property
// Keys can be any datatype
// Keys are ordered by insertion
// Do not have default keys

/**** Iterating Map ***/
//using forEach loop
// fruits.forEach((value, key) => {
//     console.log(`value : ${value}, key : ${key}`)
// })

// using Map.entries()
// for(const fruit of fruits){
//     console.log(fruit);
// }

// using Map.keys() -- gets keys
// for(const fruit of fruits.keys()){
//     console.log(fruit);
// }

// using Map.values() -- gets values
// for(const fruit of fruits.values()){
//     console.log(fruit);
// }

// Objects as Keys

const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
// const fruits = new Map();

// // Add new Elements to the Map
// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);

// console.log(fruits.get('Apples')) --- undefined
// console.log(fruits.get(apples))

// JavaScript Map.groupBy()
//---------------------------
// The Map.groupBy() method groups elements of an object according to string values returned from a callback function.
// The Map.groupBy() method does not change the original object.

// Create an Array
// const fruits = [
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//     {name:"oranges", quantity:200},
//     {name:"kiwi", quantity:150}
//   ];
  
//   // Callback function to Group Elements
//   function myCallback({ quantity }) {
//     return quantity > 200 ? "ok" : "low";
//   }
  
//   // Group by Quantity
//   const result = Map.groupBy(fruits, myCallback); ----does not work in codespace
//   console.log(result)