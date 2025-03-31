/************* I/O heavy operations ***************/ 
// I/O (Input/Output) bound tasks refer to tasks in a computer program that involve 
// a lot of data transfer between the program and external systems or devices. 
// These operations usually require waiting for data to be read from or written to sources like disks,
// networks, databases, or other external devices, which can be time-consuming compared to 
// in-memory computations.
// Examples of I/O Heavy Operations:
// 1.Reading a file 2. Starting a clock 3. HTTP Requests

const { log } = require('console');
const fs = require('fs');
const { console } = require('inspector');

const contents = fs.readFileSync('medium/a.txt', 'utf-8')
console.log(contents)

/******** CPU bound tasks ****** */ 
// CPU-bound tasks are operations that are limited by the speed and power of the CPU. These tasks require significant computation and processing power, meaning that the performance bottleneck is the CPU itself.
let ans = 0;
for(let i = 0; i < 1000; i++){
    ans += 1;
}
// console.log(ans);

// Async or concurrent operations
function print(err, contents){
    if(err){
        console.log('Wrong File Path');
    }
    else console.log(contents)
}
fs.readFile('medium/a.txt', 'utf-8', print);
fs.readFile('medium/b.txt', 'utf-8', print);

console.log('Wil this print first?')
