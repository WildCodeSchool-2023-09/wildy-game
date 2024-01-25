const AbstractManager = require("./AbstractManager");

class CollectionManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "collection" });
  }

  // The C of CRUD - Create operation

  async create(collection) {
    const [result] = await this.database.query(
      `insert into ${this.table} (playerId, avatarId) values (?, ?)`,
      [collection.playerId, collection.avatarId]
    );
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(collection) {
    if (!collection.id) {
      throw new Error("Missing ID");
    }

    const query = `update ${this.table} set playerId = ?, avatarId = ? where id = ?`;
    const [result] = await this.database.query(query, [
      collection.playerId,
      collection.avatarId,
      collection.id,
    ]);

    if (result.affectedRows === 0) {
      throw new Error("Item not found");
    }
    return result;
  }

  async delete(id) {
    const [rows] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return rows;
  }

  async getCollectionByPlayerId(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where playerId = ?`,
      [id]
    );
    return rows;
  }

  async getCollectionByAvatarId(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where avatarId = ?`,
      [id]
    );
    return rows;
  }

  async getAvatarsOfPlayerId(playerId) {
    const [rows] = await this.database.query(
      `SELECT a.image, a.name, a.rarity from avatar as a JOIN collection as c ON a.id = c.avatarId WHERE c.playerId = ?`,
      [playerId]
    );
    return rows;
  }
}

module.exports = CollectionManager;
