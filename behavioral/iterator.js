// The iterator is used to traverse elements of a collection. any of the JavaScript built in functions we have at our
// disposal to iterate over data structures (for, forEach, for...of, for...in, map, reduce, filter, and so on) are examples of the iterator pattern.

class MyIterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          };
        } else {
          this.index = 0;
          return {
            done: true,
            value: undefined,
          };
        }
      },
    };
  }
}

const iterator = new MyIterator([1, 2, 3, 4, 5]);

for (let item of iterator) {
  console.log(item);
}
