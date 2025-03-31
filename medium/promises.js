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
function setTimeoutProsified(ms){
    return new Promise((resolve) => { //promise takes a func1 as argument --> func1 takes another func as argument and calls it after specified time
        setTimeout(resolve, ms);
    })
}
setTimeoutProsified(3000).then(main);
