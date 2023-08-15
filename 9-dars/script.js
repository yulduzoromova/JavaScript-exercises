// 1. Istalgan sonni binary ko'rinishiga o'tkazib, nechta 0 va nechta 1 qatnashganini aniqlang.

// ex: 5 === 101
// res: 2ta 1, 1ta nol qatnashgan

let num = 5;
let binary = num.toString(2)

function count() {
    let zero = 0;
    let one = 0;

  for(num of binary){
    if (num.includes("1")) {
      one++
    }else{
      zero++
    }
  }   
  console.log(`1 sonidan ${one} bor`);  
  console.log(`0 sonidan ${zero} bor`);
}
count()


// 2. Berilgan sonlar ichidan eng katta va eng kichik sonlarning ayirmasini toping. Manfiy son chiqmasin.

// let min = Math.min(2, 4, 5, 77, 6, 13, 34, 25)
// let max = Math.max(2, 4, 5, 77, 6, 13, 34, 25)

// let c = max - min
// console.log(c);


// 3. Math ning trunc vs floor vs ceil, paresInt lar bilan farqini tushintirib bering.
// Math.floor sonni kasr qismini inkor qilin butun qismini chiqaradi masalan, 2.9 bo'lsa 2 qaytaradi. Math.ceil sonni kasr qismi bor bo'lsa undan keyingi sonni chiqaradi ya'ni 2.1 bo'lsa 3 chiqaradi. Math.trunc huddi Math.floorga o'xshaydi ln bitta farqi Math.floor sonni kasr qismi bn qo'shib sonni butun qismini chiqarsa a Math.trunc esa sonni kasr qismini umuman inkor qiladi floorga o'xshab yaxlitlab olamaydi. Manfiy sonlarda esa floor o'zidan past songa qarab yaxlitlasa masalan -10.999 = -11, a trunc manfiy sonda ham kasr qismini inkor qiladi ya'ni -10.999 bo'lsa -10 chiqaradi.


// 4. randomIntiger(min, max) function yozilsin. min max oralig'idagi random raqam chiqsin
// ex: min = 1, max = 50
// output: 1dan 50gacha bo'lgan ixtiyoriy raqam 

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//  console.log(getRandomInt(1, 50));
