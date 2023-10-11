// 1
{
//Berilgan Stringda nechta katta harf va nechta kichik harf borligi topilsin
let str = 'Webbrain'

let kattaHarf = ""
let kichikHarf = ""
function upperCase(str) {
  for(char of str) {
    if(char === char.toUpperCase()){
      kattaHarf ++
    } else if(char === ' '){
      kattaHarf --
    }
    else {
      kichikHarf ++
    }
  }
}

upperCase(str)
console.log(`${kattaHarf}ta katta harf, ${kichikHarf}ta kichik harf bor`)

}

// 2
{
  // let str = "WebBr@in Ac@demy";
  // // berilgan stringdagi @ ni a harfiga o'zgartiring
  // // replaceAll va /g dan foydalanilmasin

  // const findA = (str) => {
  //   for (letter of str) {
  //     if (letter.includes("@")) {
  //      res = str.replaceAll("@", "a")
  //     }
  //   }
  // };
  // findA(str)
  // console.log(res);
}

// 3
{
  // Duplicate bo'lgan sonlarni o'chiring

  let n = [ 2, 3, 4, 5, 1, 1, 7, 8, 8, 6]
  let res = n.filter((value, index, array) => array.indexOf
  (value) === index)
  console.log(res);
}

// 4
{
  let str = "webbbraiiin accaddemmy";
  // Duplicate bo'lgan harflarni o'chiring

  let array = str.split(" ")

  let res1 = array.filter((value, index, array) => array.indexOf(value) === index).join("")

  function removeDuplicates(str) {
    let res = [];
    let result = str.split("");
    result.forEach((item) => {
      if (item !== " ") {
        if (!res.includes(item)) {
          res.push(item);
        }
      }
    });
    let r = res.join("")
    console.log(r)
    
  }
  removeDuplicates(str);

}

// 4
{

  let str = "We66ra1n Acad4my";
  // String ichidagi raqamlarni toping.

  const findNumber = (str) => {
    for (val of str) {
    const charCode = val.charCodeAt()
    if (charCode >= 48 && charCode <= 57) {
      console.log(`${val} is a number`);
      
    }
   }
  };

findNumber(str);

}

// 5
{
  let str = "Webbrain";
  // string berilgan stringning har bir belgisini 2 marta takrorlab qiymat qaytarsin
  // res: "WWeebbbbrraaiinn"

  const dubleLetter = (string) => {
    let result = "";
    for (val of string) {
      result += val + val;
    }
    return result;
  };
  result = dubleLetter(str);
  console.log(result);
}

// 6
{
  // Berilgan so'z palindrom yoki palindrom emasligini toping
  // non, kichik, kiyik, ikki, kuchuk

  function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
  }

  console.log(checkPalindrom ('nok')) 

}

// 7
{
  let str1 = "web";
  let str2 = "ewb";
  // berilgan stringdagi harflar soni bir - biriga teng yoki teng emasligi topilsin
  // tartibi muhim emas
  let str = str1.localeCompare(str2)
  console.log(str);
}

// 8
{
  let str = "webbrain academy";
  // stringda qatnashgan belgilar sanog'ini toping
  // res: {w: 1, e: 2, b: 2, r: 1, a: 3, i: 1, n: 1....}

  const getCount = (string) => {
    result = {};
    for (val of string) {
      result[val] ? result[val]++ : (result[val] = 1);
    }
    return result;
  };

  getCount(str);
  console.log(result);
}


// Object
// 1
{
  // Object keylarini toping
  // let obj = { title: "Webbrain", age: 2 };
  // for( key in obj){
  //   console.log(key);
  // }
}

// 2
{
  // object ichidagi agelar yig'indisini toping.
  // let obj = {
  //   title: "Webbrain",
  //   age: 2,
  //   child: {
  //     age: 4,
  //     name: "Webbrain",
  //     child: {
  //       age: 3,
  //     },
  //   },
  // };

  // // let sum1 = obj.age + obj.child.age + obj.child.child.age;
  // // console.log(sum1);

  // // 2-yo'l
  // let sum = 0;
  // while (obj) {
  //   sum = sum + obj.age
  //   obj = obj.child
  // }
  // console.log(sum);
}

// 3
{
  //object valuelarining boolean tipidagi ma'lumotlarini qaytaring keylari bn birga
  //   let obj = {
  //     id: 1,
  //     name: "Webbrain",
  //     offline: true,
  //     online: true,
  //     individual: false,
  //   };
  //   const findBoolean = (a) => {
  //     for (value in obj) {
  //       if (typeof obj[value] !== "boolean"){
  //        delete obj[value]
  //       };
  //     }
  //   };
  //  findBoolean(obj);
  //  console.log(obj);
}

// Arrays
// 1
{
  // remove duplicates
  // new Set dan foydalanilmasin
  // 3ta yo'l
  let num = [2, 3, 5, 3, 2, 3, 6, 8, 7, 6];

  let res = num.filter((value, index, array) => array.indexOf(value) === index )
  console.log(res);               // [ 2, 3, 5, 6, 8, 7 ]

} 

// 2 
{
  // let num1 = [1, 2, 3];
  // let num2 = [1, 2, 3];
  // // arraylarni bir-biriga taqqoslang
  // console.log(num1.toString() == num2.toString());
}

// 3
{
  let arr = [1, 64, 8, 27, 64, 125];
  // arraydagi ikki xonali sonlarni chiqaring

  const two = (arr) => {
    arr.filter((val) => {
      if(val > 9 && val <= 99){
        console.log(val);
      }
     
    });
  };
  two(arr)

}

