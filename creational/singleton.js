// Singletons are classes which can be instantiated once, and can be accessed globally.
// This single instance can be shared throughout our application,
// which makes Singletons great for managing global state in an application.

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new Database("mongo");
const sql = new Database("sql");

console.log(mongo.getData()); // mongo
console.log(sql.getData()); // mongo
