const AbstractManager = require("./AbstractManager");

class AmisManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "amis" });
  }

  async create(amis) {
    const [result] = await this.database.query(
      `insert into ${this.table} (playerId1, playerId2) values (?, ?)`,
      [amis.playerId1, amis.playerId2]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async update(amis) {
    if (!amis.id) {
      throw new Error("Missing ID");
    }

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET playerId1 = ?, playerId2 = ? WHERE id = ?`,
      [amis.playerId1, amis.playerId2, amis.id]
    );

    if (result.affectedRows === 0) {
      throw new Error("Aucune ligne affectée, l'update a échoué");
    }
    return result;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return result;
  }
}

module.exports = AmisManager;
