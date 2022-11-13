// Every subclass/derived class should be substitutable for their base/parent class.
// Subclass should override the parent class methods in a way that does not break functionality from a client’s point of view.

class Person {}

class Member extends Person {
  access() {
    console.log("You have access");
  }
}

class Guest extends Person {}

//////////////////////////////////////////////////

class FrontEndDev extends Member {
  writeFrontEnd() {}
}

class BackEndDev extends Member {
  writeBackEnd() {}
}

class OuterPerson extends Guest {
  access() {
    throw new Error("no access");
  }
}

function getSecureData(member) {
  member.access();
}

getSecureData(new FrontEndDev());
getSecureData(new BackEndDev());
// getSecureData(new OuterPerson()); should be called with member
