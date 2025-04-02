/**
 * Callback hell
Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2
 */

// callback approach
// setTimeout(function(){
//     console.log('hi')
//     setTimeout(function(){
//         console.log('hello')
//         setTimeout(function(){
//             console.log('hello there')
//         }, 5000)
//     }, 3000)
// }, 1000);

// Pormisied approach
function setTimeoutPromisified(duration){
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}

// setTimeoutPromisified(1000).then(function(){
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("hello");
//         setTimeoutPromisified(5000).then(function(){
//             console.log("hello there");
//         });
//     });
// });

/**Promise Chanining */
// setTimeoutPromisified(1000).then(function(){
//     console.log("hi");
//     return setTimeoutPromisified(3000) //it returns a promise so we can apply a then on it
// }).then(function(){
//     console.log("hello");
//     setTimeoutPromisified(5000)
// }).then(function(){
//     console.log("hello there");
// });

// async await
async function solve(){
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    setTimeoutPromisified(5000);
    console.log("hello there");
}
// solve()

// Promisified ReadFile

const fs = require('fs')
function readFileAsync(filePath){
    return new Promise(function(resolve){
        fs.readFile(filePath, 'utf-8', function(err, data){
            console.log(data)
            resolve();
        })
    });
}

// readFileAsync('medium/a.txt').then((data) => console.log(data))
async function fileRead(){
    await readFileAsync('medium/a.txt');
    console.log('done');
}
fileRead();