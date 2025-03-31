// The Date() constructor can be called with two or more arguments, 
// in which case they are interpreted as the year, month, day, hour, minute, second, and millisecond, respectively, in local time
//  new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

const date = new Date();
console.log(date.getDate()); //day of the month
console.log(date.getMonth()); // 0 based month 
console.log(date.getFullYear());
console.log(date.getDay()); //day of the week starting with 0 

const d = new Date(2018, 15, 24, 10, 33, 30); //YYYY MM DD 
// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
console.log(d);