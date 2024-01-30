const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "player" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select * from ${this.table} order by id`
    );
    return rows;
  }
}

module.exports = AdminManager;
