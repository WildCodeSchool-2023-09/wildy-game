const bcrypt = require("bcryptjs");
const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    const player = await tables.player.checkEmail(req.body.email);
    const validatePlayer = await bcrypt.compare(
      req.body.password,
      player[0].password
    );
    if (player == null || !validatePlayer) {
      res.status(422).send("Wrong password");
    } else {
      res.json(player);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
