// if else
// 1.
// if ("0") {
//   alert("Hello")
// }

// 2. Using the if...else construct, write the code which asks: "What is the official name of JavaScript?"
// If the visitor enters "ECMAScript", then output "Right", otherwise - output "You don't know? ECMAScript"

// let js = prompt('What is the official name of JavaScript?' )
// if (js === "ECMAScript") {
//   alert("Right!")
// }else {
//   alert("You don't know? ECMAScript")
// }

// 3. 1, If the value is greater than zero
//    -1, If less than zero
//    0, If equals zero

// In this task we assume that the input is always a number.

// let b = prompt("Write number")

// if (b > 0){
//   console.log(1);
// }
// else if (b < 0){
//   console.log(-1)
// }else if (b == 0) {
//   console.log(0)
// }

// 4. Rewrite this if using the conditional operator '?':

// let result,
// a = 2,
// b = 1;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
// console.log( result );

// a + b < 4 ? result = 'Below' : result = 'Over'


// 4. Rewrite "if...else" into "?"
// Rewrite if...else using multiple ternary operators "?"
// For readability, it's recomended to split the code into multiple lines

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director'){
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message;
// let login = 'No login';

//  (login == 'Employee') 
//  ? message = 'Hello'
//  : (login == 'Director')
//  ? message = 'Greetings'
//  : (login == '') 
//  ? message = 'No login'
//  : message = '';

// console.log(message);