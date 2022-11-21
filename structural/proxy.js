// With a Proxy object, we get more control over the interactions with certain objects.
// A proxy object can determine the behavior whenever we're interacting with the object,
// for example when we're getting a value, or setting a value.

// Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that
// person directly, you'll speak to the proxy person who will represent the person you were
// trying to reach. The same happens in JavaScript: instead of interacting with the target
// object directly, we'll interact with the Proxy object.

const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
    return true;
  },
});

personProxy.name;
personProxy.age = 43;

console.log(person); // age 43
