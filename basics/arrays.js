const arr = [1, 2, 3, 4, 5 , 6]
const myArr = new Array(1, 2, 4, 5, 6);
// console.log(myArr);

myArr.push(7)
myArr.push(8)
// myArr.unshift(9) //insert in the beginning
// myArr.shift() //remove from the beginning

// console.log(myArr.includes(9))
// console.log(myArr)
// console.log(myArr.indexOf(6));

// console.log(myArr)

// const newArr = myArr.join() //return a string conversion of the array

// console.log(myArr);
// console.log( newArr);
// console.log(typeof  newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //returns a copy of the selected range start included but end excluded, doesn't make any changes in the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) 
//deletes selected range elements from the array including [start, end] 
console.log("C ", myArr);
console.log(myn2);