const AbstractManager = require("./AbstractManager");

class AvatarManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "boutique" });
  }

  // The C of CRUD - Create operation

  async create(boutique) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (prix, avatarId) values (?, ?)`,
      [boutique.prix, boutique.avatarId]
    );

    // Return the ID of the newly inserted item
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

  async update(prix, avatarId, id) {
    const query = `UPDATE ${this.table} SET prix = ?, avatarId = ? WHERE id = ?`;

    const [result] = await this.database.query(query, [prix, avatarId, id]);

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

    return rows;
  }

  async common() {
    const [result] = await this.database.query(
      `SELECT a.name, a.image, a.rarity, b.prix from avatar a join ${this.table} b on a.id = b.avatarId WHERE a.rarity="Common"`
    );
    return result;
  }

  async rare() {
    const [result] = await this.database.query(
      `SELECT a.name, a.image, a.rarity, b.prix from avatar a join ${this.table} b on a.id = b.avatarId WHERE a.rarity="Rare"`
    );
    return result;
  }

  async epic() {
    const [result] = await this.database.query(
      `SELECT a.name, a.image, a.rarity, b.prix from avatar a join ${this.table} b on a.id = b.avatarId WHERE a.rarity="Epic"`
    );
    return result;
  }

  async legendary() {
    const [result] = await this.database.query(
      `SELECT a.name, a.image, a.rarity, b.prix from avatar a join ${this.table} b on a.id = b.avatarId WHERE a.rarity="Legendary"`
    );
    return result;
  }
}

module.exports = AvatarManager;
