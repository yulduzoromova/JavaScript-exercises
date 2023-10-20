// ======= Recurtion function homework ========

// 1. Factorial
// n! = n * (n - 1) * (n - 2) * ... * 1

function factoril (n) {
  if (n === 1) {
    return 1
  } else {
    return n * factoril(n - 1)
  }
}
 console.log(factoril(6));


// 2. Fibonacci numbers are the next number is a sum of the two preceding ones.
// write a function fib(n) that returns the n-th Fibonacci number.
// In mathematics, the Fibonacci numbers form a sequence such that each number is the sum of the two preceding numbers, starting from 0 and 1. That is Fn = Fn-1 + Fn-2, where F0 = 0, F1 = 1, and n≥2. The sequence formed by Fibonacci numbers is called the Fibonacci sequence.
// Fibonacci numbers list - 0 = 0, 1 = 1, 2 = 1, 3 = 2, 4 = 3, 5 = 5...
function fib(n) {
  if (n < 2) {
    return n;
  }
  else{
    return fib(n - 1) + fib(n - 2)
  } 
 }

console.log(fib(2))
