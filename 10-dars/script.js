// 1. check(str1, str2) - function yozilsin. Berilgan parametorlar bir-biriga mos yoki umuman mos kelmasligi va qisman to'g'ri ekanligini ifodalovchi natija qaytarsin.
//Ex: str = "webbrain academy", str1 = "webbrain"

let str1 = "webbrain academy";
let str2 = "webbrain";

function check() {
 let string = str2.localeCompare(str1)
  if (string == 0) {
    console.log(`${str1} ${str2} to'liq mos `);
  } else if (string == 1) {
    console.log(`${str1} ${str2} qisman mos`);
  } else {
    console.log(`${str1} ${str2} mos emas`);
  }
  
  }
  check()

// 2. getCount(str) - function yozilsin. Function str dagi harflar sanog'ini chiqarib bersin. 
// ex: str = 'webbrain' {w: 1, e: 1, b: 2, r: 1, a: 1, i: 1, n: 1}

let name = "webbrain"

function getCount(name){
  let count = {}
  for(const letter of name){
    if (count.hasOwnProperty(letter)){
        count[letter] += 1
    } else {
        count[letter] = 1
    }
  }
  return count
}
console.log(getCount(name))

// 3. truncate(str, n) - function yozilsin. Berilgan stringdan n'ta harf ajratib chiqarib bersin.
// ex: str = "webbrain academy", n = 5
// res: 'webbr'

string = "webbrain academy"

function truncate(str, n) {
 console.log(str.slice(0, n)); 
}

truncate(string, 5)

// 4. getCurrency(str) - berilgan pul birligini faqat raqam qismini ajratib chiqarib bersin
// ex: str = '$1200 - 1200.

let sum = "$1200"

function getCurrency(money){
  for(symbol of sum){ 
    if(symbol == "$"){
    return sum.replace("$", "")
    }
}
}
console.log(getCurrency(sum))

// 5. Berilgan string ichidan raqam, string va characterlarni alohida sanog'i bilan chiqaring. 
// ex: 'webb@!n_2022, 
// res: {letter: 6, char: 3, numbers: 4}

let academy = 'webb@!n_2022'

function check(academy) { 
    if(academy == /[a-z]/i){
      console.log(academy);
    }
  
}
 console.log(check())

 
// 6. capitilize(str) - berilgan stringdagi barcha so'zlarni faqat bosh harfini katta harfga o'zgartirib chiqish kk.
// ex: webbrain academy
// res: Webbrain Academy

let str3 = 'webbrain academy'

function capitilize() {
let str2 = str3.split(" ")
let capitalizedWords = []

for(let word of str2) {
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
  capitalizedWords.push(capitalizedWord)
}
return capitalizedWords.join(' ')
}
console.log(capitilize(str3))


7. 

let str = "web brain academy web emy"

function replaceW(params) {
let strToArray = str.split("")

for ( word of strToArray) {
  if (word == "w") {
   word.replace("w", "W")
  
  }
}
}

console.log(replaceW(str))