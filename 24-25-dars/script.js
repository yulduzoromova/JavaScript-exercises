// Error nimada?

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);                  // constructorda ota classning constructorini ishlatish uchun super kalit so'zini yozishimiz kerak edi.
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); 
console.log(rabbit.name);

// Error nimada? 

class Rabbit extends Object {
  constructor(name) {
    super(name);
  }
}

let rabbit1 = new Rabbit("Rab");
console.log(rabbit1.hasOwnProperty("name"));