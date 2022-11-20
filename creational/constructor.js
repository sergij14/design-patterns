// Constructors are special functions that can be used to instantiate new objects with methods and properties defined by that function.
// Constructor pattern is one of the most commonly used patterns in JavaScript for creating new objects of a given kind.
// As probably you know, JavaScript doesn't support the concept of classes but it does support special constructor functions.
// By simply prefixing a call to a constructor function with the keyword 'new',
// you can tell JavaScript you would like a function to behave like a constructor and instantiate a new object with the members defined by that function.

//////////////////

// function Server(name, ip) {
//   this.name = name;
//   this.ip = ip;
// }

// Server.prototype.getUrl = function () {
//   return `https://${this.ip}:80`;
// };

class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getUrl() {
    return `https://${this.ip}:80`;
  }
}

const aws = new Server("AWS Georgia", "82.75.82.31");

console.log(aws.getUrl());
