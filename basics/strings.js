const name = "Dipanwita"
const repoCount = 20

//String Interpolation using back-tick

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//Using js object constructor
const gameName = new String('Dipanwita-Bala')
// console.log(gameName)

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.charAt(6))
// console.log(gameName.indexOf('B'))

const newStr = gameName.substring(0,5) //excludes the end index
// console.log(newStr);

const anotherStr = gameName.slice(-9, 4)

const str1 = "    fuck off "
const str1Trimmed = str1.trim()
// console.log(str1);
// console.log(str1Trimmed);

const url = "https://dip.com/dip%20bala"
// console.log(url.replace('%20', '-'));

// console.log(url.includes('sundar'))
const splittedStr = gameName.split('-')
console.log(splittedStr)



