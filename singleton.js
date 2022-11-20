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
