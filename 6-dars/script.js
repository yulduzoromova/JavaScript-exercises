// 1. Rewrite the code changing the for loop to while without altering its behavior (the output should stay same)

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}`);
// }

// let i = 0;
// while ( i < 3 ) {
//   alert( `number ${i}`)
//   i++;
// }

// 2. The prefix form ++i:

// let i = 0;
// while (++i < 5) alert(i);  // ini srazu 1ga oshirib 4gacha jb chiqaradi

// 3. The postfix form i++

// let i = 0;
// while (i++ < 5) alert(i)   // 1, 2, 3, 4, 5


// 4. The following function returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// checkAge()


// 5. Rewrite the function using '?' or '||'
// The following function returns true if the parameter age is greater than 18
// Otherwise it asks for confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }

// age = 17
// age > 18 ? true : confirm('Did parents allow you?')


// 6. Function min(a, b)
// Write a function min(a, b) which returns the least of two numbers a and b.
// For instance:

// 1. min(2, 5) == 2
// 2. min(3, -1) == -1
// 3. min(1, 1) == 1

// function minNumber(a, b) {
//   if (a > b) {
//     console.log(b);
//   } else if ( a = b){
//     console.log(`${a} = ${b}`);
//   }
//   else{
//     console.log(a);
//   }
// }
// minNumber(2, -1)

// 7. Function pow(x,n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// 1. pow(3, 2) = 3 * 3 = 9
// 2. pow(3, 3) = 3 * 3 * 3 = 27
// 3. pow(1, 100) = 1 * 1 * ... * 1 = 1

// function multipleNum(n, x) {
//   let result = x

//   for (i = 1; i < n; i++){
//   result = result * x
//   }
// }
//  multipleNum(3, 3)










