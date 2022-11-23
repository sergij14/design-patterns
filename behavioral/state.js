// The State Pattern ensures an object to behave in a predictable, coordinated way depending on the current "state" of the application.

// A behavior is defined on a state object that is responsible for running some handler when the overall state transitions to its own state.
// The interface that these state objects operate on is called the Context.

// The way this pattern works in practice is that by delegating the work of certain actions to the state objects that represent a piece of the state,
// the action that represents the piece of the state is responsible for updating it from their handling of that state.

// This means that the Context may have one or more handlers but ultimately the state objects that hold a reference to the Context trigger state changes
// entirely amongst themselves one at a time.

class Light {
  constructor(light) {
    this.light = light;
  }
}

class RedLight extends Light {
  constructor() {
    super("red");
  }

  sign() {
    return "STOP";
  }
}

class YellowLight extends Light {
  constructor() {
    super("yellow");
  }

  sign() {
    return "READY";
  }
}

class GreenLight extends Light {
  constructor() {
    super("green");
  }

  sign() {
    return "GO!";
  }
}

class TrafficLight {
  constructor() {
    this.states = [new RedLight(), new YellowLight(), new GreenLight()];
    this.current = this.states[0];
  }

  change() {
    const total = this.states.length;
    let index = this.states.findIndex((light) => light === this.current);

    if (index + 1 < total) {
      this.current = this.states[index + 1];
    } else {
      this.current = this.states[0];
    }
  }

  sign() {
    return this.current.sign();
  }
}

const traffic = new TrafficLight();
console.log(traffic.sign());
traffic.change();

console.log(traffic.sign());
traffic.change();

console.log(traffic.sign());
traffic.change();

console.log(traffic.sign());
traffic.change();

console.log(traffic.sign());
traffic.change();

console.log(traffic.sign());
traffic.change();
