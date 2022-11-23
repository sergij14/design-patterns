// The mediator pattern makes it possible for components to interact with each other through a central point: the mediator.
// Instead of directly talking to each other, the mediator receives the requests, and sends them forward! In JavaScript,
// the mediator is often nothing more than an object literal or a function.

// You can compare this pattern to the relationship between an air traffic controller and a pilot. Instead of having the pilots
// talk to each other directly, which would probably end up being quite chaotic, the pilots talk the air traffic controller.
// The air traffic controller makes sure that all planes receive the information they
// need in order to fly safely, without hitting the other airplanes.

// A good use case for the mediator pattern is a chatroom! The users within the chatroom won't talk to each other directly.
// Instead, the chatroom serves as the mediator between the users.

class ChatRoom {
  logMessage(user, message) {
    const time = new Date();
    const sender = user.getName();

    console.log(`${time} [${sender}]: ${message}`);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

const chatroom = new ChatRoom();

const user1 = new User("John Doe", chatroom);
const user2 = new User("Jane Doe", chatroom);

user1.send("Hi there!");
user2.send("Hey!");
