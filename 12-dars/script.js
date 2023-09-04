// 1. Array ichidagi sonlar yig'indisini toping.
// let num = [1, 2, 3, 4, 5]
// let res = eval(num.join('+'))
// console.log(res);

//2-yo'l ===================
// let nums = [1, 2, 3, 4, 5]
// let sum = 0
// for(value of nums){
// sum += value
// }
// console.log(sum);

//3-yo'l ===================
// let num = [1, 2, 3, 4, 5]
// let sum = num.reduce((accumulator, currentValue)=>{
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);

// 2. arrayni bir - biriga taqqoslang
let a = [1, 2, 3, 4, 5, 6]
let b = [1, 2, 3, 4, 5, 6]

console.log(a.toString() === b.toString());


// 3. o'zgartirish
// 1) camelize("background-color") == "backgroundColor";
// 2) camelize("list-style-image") == 'listStyleImage';
// 3) camelize("-webkit-transition") == 'WebkitTransition';

// 4. 
let users = [
{ id: 1, year: 1998, engine: 1, name: 'Tico'},
{ id: 2, year: 2005, engine: 1.2, name: 'Matiz'},
{ id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
{ id: 4, year: 2010, engine: 1.5, name: 'Cobalt'},
{ id: 5, year: 2012, engine: 2, name: 'Malibu'},
{ id: 6, year: 2000, engine: 1.2, name: 'Damas'},
{ id: 7, year: 2018, engine: 2.4, name: 'Tracker'},
]

console.log(users.copyWithin(0, 1, 3));

console.log(users.every((value) => value.engine >= 1))
console.log(users.some((value) => value.id <= 1))

users.forEach((value, index) => {
  console.log(value);
})

users.map((value, index) => {
  console.log(value);
})

console.log(users.filter((value,index) => value.year <= 2010))
console.log(users.filter((value, index) => value.engine >= 1.4));
console.log(users.sort((a, b) => a.year - b.year));
console.log(users.sort((a, b) => b.id - a.id));
console.log(users.sort((a, b) => a.engine - b.engine));
console.log(users.sort((a, b) => a.name.localeCompare(b.name)));
console.log(users.find((value) => value.year === 2005));
console.log(users.find((value) => value.engine === 2));
