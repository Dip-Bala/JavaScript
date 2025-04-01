/**
 * Callback hell
Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2
 */

function log(){
    console.log('hi')
    setTimeout(function(){
        console.log('hello')
        setTimeout(function(){
            console.log('hello there')
        }, 5000)
    }, 3000)
}
setTimeout(log, 1000);