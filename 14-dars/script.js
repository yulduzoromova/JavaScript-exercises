// Multiple Locale Support
// moment().format('LT') - 8:41 AM
let date = new Date()
const hour = date.getHours()
const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

console.log(`${hour}` < 12 ? `${hour}:${minute} AM` : `${hour}:${minute} PM`);

// moment().format('LTS') - 8:41:24 AM
const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
console.log(`${hour}` < 12 ? `${hour}:${minute}:${seconds} AM` : `${hour}:${minute}:${seconds} PM`);

// moment().format('L') - 10/17/2023
const day = date.getDate()
const month = date.getMonth()+1
const year = date.getFullYear()
console.log(`${month}/${day}/${year}`);

// moment().format('LL') - October 17, 2023
const monthLL = date.getMonth()
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

//console.log(`${months[monthLL]} ${day}, ${year}`);

// moment().format('ll') - Oct 17, 2023
//console.log(`${months[monthLL].slice(0, 3)} ${day}, ${year}`);

// moment().format('LLL') - October 17, 2023 10:07 AM
const sana = `${months[monthLL]} ${day}, ${year}`
const time = `${hour}` < 12 ? `${hour}:${minute} AM` : `${hour}:${minute} PM`

console.log( sana, time);

// moment().format('lll') - Oct 17, 2023 10:07 AM
const sanalll = `${months[monthLL].slice(0, 3)} ${day}, ${year}`

console.log(sanalll, time);

// moment().format('LLLL') - Tuesday, October 17, 2023 10:07 AM

const weekDay = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const week = date.getDay()
console.log(weekDay[week], sana, time);

// moment().format('llll') - Tue, October 17, 2023 10:07 AM
console.log(weekDay[week].slice(0, 3), sana, time);


// Format Dates
