// let a = 1, b = 1;

// let c = ++a;  // 2    srazu 1ga oshiradi
// let d = b++;  // 1    chunki boshlang'ich natijani chiqarib console 1marta ishlab bo'lgandan kn natijani chiqaradi 

//=======================
// let a = 2;
// let x = 1 + (a += 2);     // 5, chunki a ni qiymati 2+2=4 kn esa 1ga qo'shiladi
// console.log(x);

//=======================

console.log("" + 1 + 0); //10, chunki stringga number qo'shilayapti, number ham stringga aylanib 10 chiqadi

console.log("" - 1 + 0); // -1, chunki stringdan number ayirilsa numberligicha qolaveradi -1+0 esa -1 natijani beradi

console.log(true + false); // 1

console.log(6 / "3")  // 2 number

let a = "2" * "3"
console.log(a);      // 6 number

console.log(4 + 5 + "px"); // 9px string

console.log(" $ " + 4 + 5); //$45 string

console.log("4" - 2);  // 2 number

console.log("4px" - 2); // NaN

let b = " -9 " + 5
console.log(b); // -9  5 string    -qiymatli string bo'lgan songa qo'shilsa number ikkala qiymat ham alohida alohida stringda chiqadi

let c = " -9 " - 5
console.log(typeof c);  // -14 number   -qiymatli string bo'lgan sondan ayirilsa sonlar qo'shilib -li number qiymat chiqaradi

console.log(null + 1);  // 1 string

console.log(undefined + 1); // NaN 

console.log(" \t \n" - 2);  // -2 number

// Comparisons
console.log(5 > 4);    // true
console.log("2" > "12");  //true
console.log(undefined == null);  //true
console.log(undefined === null );  // false
console.log(null == "\n0\n");      //false
console.log(null === "\n0\n");     //false

