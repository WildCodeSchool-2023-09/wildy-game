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

  async createBanner(banner, id, extension) {
    // Execute the SQL INSERT query to add a new item to the "item" table

    const [result] = await this.database.query(
      `update ${this.table} set banner=? where id= ?`,
      [
        `${banner.destination.replace("public", "")}/${
          banner.filename
        }${extension}`,
        id,
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

  async readByUsername(pseudo) {
    // Execute the SQL SELECT query to retrieve a specific item by its username
    const [rows] = await this.database.query(
      `select id, firstname, lastname, pseudo, email, experience, credit, membreId, profilTheme, lvl, banner, activeAvatar from ${this.table} where pseudo = ?`,
      [pseudo]
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
      `select * from ${this.table} where pseudo=?`,
      [pseudo]
    );
    return rows;
  }

  async checkMembreId(membreId) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where membreId=?`,
      [membreId]
    );
    return rows;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [result] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return result;
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

  async updateTheme(theme, id) {
    const [result] = await this.database.query(
      `update ${this.table} SET profilTheme = ? where id = ?`,
      [theme, id]
    );
    return result;
  }

  async updateAvatarColor(avatarColor, id) {
    const [result] = await this.database.query(
      `update ${this.table} SET avatarColor = ? where id = ?`,
      [avatarColor, id]
    );
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

  async createCode(credit) {
    function generateRandomString(length) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let result = "";
      for (let i = 0; i < length; i += 1) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return result;
    }

    const code = generateRandomString(8);
    const [result] = await this.database.query(
      `insert into bon (code, gain_credit) values (?, ?)`,
      [code, credit]
    );

    return result.insertId;
  }

  async useCode(code, id) {
    const [codeid] = await this.database.query(
      `select id, gain_credit from bon where code=?`,
      [code]
    );
    if (codeid.length === 0) {
      return 0;
    }
    const [used] = await this.database.query(
      `select * from redeemed where playerId=? and bonId=?`,
      [id, codeid[0].id]
    );
    if (used.length > 0) {
      return "déjà utilisé";
    }
    await this.database.query(
      `insert into redeemed (playerId, bonId) values (?, ?)`,
      [id, codeid[0].id]
    );
    await this.database.query(
      `update player set credit = credit + ? where id = ?`,
      [codeid[0].gain_credit, id]
    );
    return codeid[0].gain_credit;
  }

  async updateAvatar(id, avatarId) {
    const [result] = await this.database.query(
      `UPDATE ${this.table}
      SET activeAvatar = ?
      WHERE id = ?
      `,
      [avatarId, id]
    );
    return result;
  }

  async getAvatar(id) {
    const [result] = await this.database.query(
      `select a.image from avatar as a join player as p on a.id = p.activeAvatar where p.id = ?`,
      [id]
    );
    return result;
  }

  async getAllBons() {
    const [result] = await this.database.query(`select * from bon;`);

    return result;
  }

  async addInLeaderboard(body) {
    const [checkScore] = await this.database.query(
      `select score from scoreboard where gameId = ? and playerId = ?`,
      [body.gameId, body.id]
    );
    if (checkScore[0].score >= body.score) {
      return -1;
    }
    const [result] = await this.database.query(
      `insert into scoreboard (gameId, playerId, score) values (?, ?, ?)`,
      [body.gameId, body.id, body.score]
    );

    return result.insertId;
  }

  async getLeaderboard() {
    const [result] = await this.database.query(
      `select p.id, s.gameId, p.pseudo, s.score from scoreboard as s join player as p on s.playerId = p.id`
    );

    return result;
  }

  async deleteCode(id) {
    const [rows] = await this.database.query(`DELETE FROM bon WHERE id=?`, [
      id,
    ]);

    return rows;
  }
}

module.exports = PlayerManager;
