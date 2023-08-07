// Hello object

// 1. Write the code, one line for each action:
// 1. Create an empty object user.
// 2. Add the property name with the value John.
// 3. Add the property surname with the value Smith.
// 4. Change the value of the name to Pete.
// 5. Remove the property name from the object.

// let user = {
//   name: "John",
//   surname: "Smith",
// }

// user.name = "Pete";
// delete user.name

// console.log(user);   // {surname: 'Smith'}

// 2. 
// const schedule = {
//   "8.30": "get up"
// };

// function isEmpty() {
//   if (Object.keys(schedule).length === 0) {
//     return(true)
//   } else {
//     return(false)
//   } 
// }

// console.log(isEmpty(schedule))

// const isEmpty = (schedule) => {
// return Object.keys(schedule).length === 0
// }

// console.log(isEmpty(schedule));


// 3. We have an object storing salaries of our team:
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

// let salaries = {
  // John: 100,
  // Ann: 160,
  // Pete: 130
// }

// function allSalaries () {
// if (Object.keys(salaries).length ===0){
//   console.log("Salary is empty");
// }
// else{
//   let sum = 0
//   for(let key in salaries){
//     sum += salaries[key]
//   }
//   console.log(sum);
//   }
// }

// allSalaries()
  
// 4. Multiply numeric property values by 2.
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// for instance:

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// }

// const multiplyNumeric = (obj) => {
// for (let key in obj){
//   if (typeof obj[key] == 'number'){
//       obj[key] *= 2;
//   }
// }
// }
// multiplyNumeric(menu)
// console.log(menu);

// 5. Object keylarini toping

// let obj = {
//   id:1,
//   name:"WeBrain"
// }
// console.log(Object.keys(obj));        //  ['id', 'name']

// 6. Object valuelarining raqamga tenglarini toping.

// let obj = {
//   id: 1,
//   name: "Webbrain"
// }

// function isNumber() {
//   for( key in obj) {
//     if (typeof obj[key] == 'number'){
//       return(obj[key]);
//     }
//   }
// }

//  console.log(isNumber(obj));

// 7. Obyekt valuelarining boolean tipidagi ma'lumotlarini keylari bilan qaytaring

// let obj = {
//   id: 1,
//   name: "Webbrain",
//   offline: true,
//   online: true,
//   individual: false,
// }

// const isBoolean = () => {
//   for ( value in obj) {
//     if (typeof obj[value] !== "boolean") {
//       delete obj[value]
//     }
//   }
// }

// isBoolean(obj)
// console.log(obj);

// 8. Obyekt va string berilgan. Agar obyect keylari ichida stringga teng bo'lgan key bo'lsa shu key va valueni chiqazing

// let obj = {
//   id: 1,
//     name: "Webbrain",
//     offline: true,
//     online: true,
//     individual: false,
// }

// 9. obyekt va string berilgan. String bor bo'lgan obyekt valuelarini chiqaring.

let obj = {
  id: 1, 
  name: "atirgul",
  color: "qizil",
  count: 10,
  price: "10$"
}

const searchValue = () => {
  
}