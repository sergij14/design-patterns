// A client should never be forced to implement an interface that it doesn’t use
// or clients shouldn’t be forced to depend on methods they do not use.

/////////////////////////
// Bad Example:

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log(`${this.name} can walk`);
//   }
//   swim() {
//     console.log(`${this.name} can swim`);
//   }
//   fly() {
//     console.log(`${this.name} can fly`);
//   }
// }

// class Dog extends Animal {
//   fly() {
//     return null;
//   }
// }

// class Eagle extends Animal {
//   swim() {
//     return null;
//   }
// }

// class Whale extends Animal {
//   walk() {
//     return null;
//   }
//   fly() {
//     return null;
//   }
// }

// const dog = new Dog("Rex");
// const whale = new Whale("Whale");
// const eagle = new Eagle("Eagle");

// console.log(dog.fly());
// console.log(whale.walk());
// console.log(eagle.walk());

////////////////////////////

class Animal {
  constructor(name) {
    this.name = name;
  }
}

// objects adding some features

const swimmer = {
  swim() {
    console.log(`${this.name} can swim`);
  },
};

const walker = {
  walk() {
    console.log(`${this.name} can walk`);
  },
};

const flyer = {
  fly() {
    console.log(`${this.name} can fly`);
  },
};

class Dog extends Animal {}
class Whale extends Animal {}
class Eagle extends Animal {}

Object.assign(Dog.prototype, walker, swimmer);
Object.assign(Eagle.prototype, walker, flyer);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog("Rex");
const whale = new Whale("Whale");
const eagle = new Eagle("Eagle");

console.log(dog.swim());
console.log(whale.swim());
console.log(eagle.fly());
console.log(eagle.swim());
