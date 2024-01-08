const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "player" });
  }

  // The C of CRUD - Create operation

  async create(player) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, pseudo, password, email, membreId) values (?, ?, ?, ?, ?, ?)`,
      [
        player.firstname,
        player.lastname,
        player.pseudo,
        player.password,
        player.email,
        player.membreId,
      ]
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

  async checkEmail(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email=?`,
      [email]
    );
    return rows;
  }

  async checkPseudo(pseudo) {
    const [rows] = await this.database.query(
      `select pseudo from ${this.table} where pseudo=?`,
      [pseudo]
    );
    return rows;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(player) {
    if (!player.id) {
      throw new Error("Un ID est nécessaire pour mettre à jour l'avatar.");
    }

    const query = `UPDATE ${this.table} SET firstname = ?, lastname = ?, pseudo = ?, password= ?, email= ?, experience= ?, credit= ?, membreId= ?, profilTheme= ?, lvl= ? WHERE id = ?`;

    const [result] = await this.database.query(query, [
      player.firstname,
      player.lastname,
      player.pseudo,
      player.password,
      player.email,
      player.experience,
      player.credit,
      player.membreId,
      player.profilTheme,
      player.lvl,
      player.id,
    ]);

    if (result.affectedRows === 0) {
      throw new Error("Aucune ligne affectée, l'update a échoué");
    }
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
}

module.exports = PlayerManager;
