const AbstractManager = require("./AbstractManager");

class BoutiqueManager extends AbstractManager {
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

  async getFilter(request) {
    const { rarity } = request;
    const full = ["Common", "Rare", "Epic", "Legendary"];
    const whereClause = rarity ? "WHERE a.rarity IN (?)" : "";
    const values = rarity
      ? rarity.split(",").map((value) => value.trim())
      : full;

    const sql = `
        SELECT a.id, a.name, a.image, a.rarity, b.prix
        FROM avatar a
        JOIN ${this.table} b ON a.id = b.avatarId
        ${whereClause}
    `;

    const [rows] = await this.database.query(sql, [values]);
    return rows;
  }

  async createAvatar(id, avatarId) {
    const [check] = await this.database.query(
      `select * from collection where avatarId = ? and playerId = ?`,
      [avatarId, id]
    );
    if (check.length !== 0) {
      return 0;
    }

    const [[prix]] = await this.database.query(
      `select prix from ${this.table} where avatarId = ?`,
      [avatarId]
    );
    const [[credit]] = await this.database.query(
      `select credit from player where id = ?`,
      [id]
    );
    if (credit.credit < prix.prix) {
      return "pas assez de crédits";
    }

    const [rows] = await this.database.query(
      `insert into collection (playerId, avatarId) values (?,?)`,
      [id, avatarId]
    );

    await this.database.query(`update player set credit = ? where id = ?`, [
      credit.credit - prix.prix,
      id,
    ]);
    return rows.insertId;
  }
}

module.exports = BoutiqueManager;
