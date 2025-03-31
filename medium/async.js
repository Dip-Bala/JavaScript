/************* I/O heavy operations ***************/ 
// I/O (Input/Output) bound tasks refer to tasks in a computer program that involve 
// a lot of data transfer between the program and external systems or devices. 
// These operations usually require waiting for data to be read from or written to sources like disks,
// networks, databases, or other external devices, which can be time-consuming compared to 
// in-memory computations.
// Examples of I/O Heavy Operations:
// 1.Reading a file 2. Starting a clock 3. HTTP Requests

const fs = require('fs');

const contents = fs.readFileSync('medium/a.txt', 'utf-8')
// console.log(contents)

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
//functional arguments - function as an argument. This function is called a callback since the function gets called back when the file is read 
// fs.readFile('medium/a.txt', 'utf-8', print); 
// fs.readFile('medium/b.txt', 'utf-8', print);

// console.log('Wil this print first?') //this prints first

/******** setTimeout **********/
// setTimeout is another asynchronous function that executes a certain code after some time

function run() {
	console.log("I will run after 1s");
}

// setTimeout(run, 1000);
// console.log("I will run immedietely");


/*******   JS Architecture for async code ********** */
// 1. Call Stack
//  The call stack is a data structure that keeps track of the function calls in your program. It operates in a "Last In, First Out" (LIFO) manner, meaning the last function that was called is the first one to be executed and removed from the stack.
// When a function is called, it gets pushed onto the call stack. When the function completes, it's popped off the stack.
// Code
function first() {
  console.log("First");
}
function second() {
  first();
  console.log("Second");
}
second();

// 2. Web APIs
// Web APIs are provided by the browser (or the Node.js runtime) and allow you to perform tasks that are outside the scope of the JavaScript language itself, such as making network requests, setting timers, or handling DOM events.
// 3. Callback Queue 
// The callback queue is a list of tasks (callbacks) that are waiting to be executed once the call stack is empty. These tasks are added to the queue by Web APIs after they have completed their operation.
// 4. Event loop
// The event loop constantly checks if the call stack is empty. If it is, and there are callbacks in the callback queue, it will push the first callback from the queue onto the call stack for execution.
 