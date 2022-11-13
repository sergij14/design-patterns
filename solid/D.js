// Entities must depend on abstractions not on concretions.
// It states that the high level module must not depend on the low level module
// but they should depend on abstractions.

class Fetch {
  request(url) {
    // return fetch(url);
    return Promise.resolve("some data from:" + url);
  }
}

class LocalStorage {
  get(key) {
    return "some data from localstorage key: " + key;
  }
}

// class Database {
//   constructor() {
//     this.fetch = new Fetch();
//     this.LS = new LocalStorage();
//   }
//   getData() {
//     // return this.fetch.request("http://localhost:8000");
//     return this.LS.get("key");
//   }
// }

// const db = new Database();

// console.log(db.getData());

// Now this class Database depends on particular APIs(fetch or localstorage)

// we need to create abstract class, that will be interface to interact with some apis

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  get(url) {
    return this.fetch.request(url);
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  get(key) {
    return this.localStorage.get(key);
  }
}

class Database {
  constructor(client) {
    this.client = client;
  }

  getData(source) {
    return this.client.get(source);
  }
}

const db = new Database(new LocalStorageClient());

console.log(db.getData("key $3534 "));
