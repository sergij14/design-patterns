// With the Command Pattern, we can decouple objects that execute a certain task from the object that calls the method.

class MyMath {
  constructor(value = 0) {
    this.value = value;
  }

  square() {
    return this.value ** 2;
  }

  cube() {
    return this.value ** 3;
  }
}

class Command {
  constructor(subject) {
    this.subject = subject;
    this.commandsExecuted = [];
  }

  execute(command) {
    this.commandsExecuted.push(command);
    return this.subject[command]();
  }
}

const command = new Command(new MyMath(2));

console.log(command.execute("square"));
