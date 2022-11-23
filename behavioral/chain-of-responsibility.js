// The Chain of Responsibility passes requests along a chain of
// handlers. Each handler decides either to process the request or to
//  pass it to the next handler in the chain.

// For this pattern we could use the same exact example as before,
// as middlewares in Express are somehow handlers that either process
//  a request or pass it to the next handler.

class Sum {
  constructor(initialValue = 0) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }
}

const sum = new Sum();

console.log(sum.add(1).add(5).add(10).sum);
