// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation 
// and its resulting value. Promises are used to handle asynchronous operations more effectively than traditional callback 
// functions, providing a cleaner and more manageable way to deal with code that executes asynchronously,
// such as API calls, file I/O, or timers.


// Promisified version of setTimeout
function random(resolve){
    // resolve(); // called instantly 
    setTimeout(resolve, 3000); // called after 3 sec
}
function main(){
    console.log('Promis fulfilled')
}
// let p = new Promise(random); // promise object ka jo bhi first argument hai which is a function, uska jo first argument hai when that gets called --> then() gets called  
// p.then(main);

// Now let's write everything in a complex & fancy way
function setTimeoutPromisified(ms){
    return new Promise((resolve) => { //promise takes a func1 as argument --> func1 takes another func as argument and calls it after specified time
        setTimeout(resolve, ms);
    })
}
function callback() {
	console.log("3 seconds have passed");
}

// setTimeoutPromisified(3000).then(callback);

/************************* File System Promisified versions************************************ */

const fs = require('fs');
// callback approach
// function cleanFile(file, onDone){
//     fs.readFile(file, 'utf-8', function(err, data){
//         data = data.trim();
//         fs.writeFile(file, data, onDone);
//     })
// }

function onDone(){
    console.log('File is cleaned');
}
// cleanFile("medium/a.txt", onDone);

// Promisified Approach
function cleanFile(filePath){
    return new Promise(promisifiedReadFile);
}
function promisifiedReadFile(readTheFile, filePath){
    readTheFile();
}
function readTheFile(resolve, filePath){
    fs.readFile(file, 'utf-8', function(err, data){
        data = data.trim();
        fs.writeFile(file, data, resolve);
    });
}

//In one function 
function cleanFile(filePath){
    return new Promise(
        (done) => {
            fs.readFile(filePath, 'utf-8', function(err, data){
                data = data.trim();
                fs.writeFile(filePath, data, function(){
                    console.log(data);
                    done();
                });
            });
        }
    );
}

cleanFile("medium/a.txt").then(onDone);

