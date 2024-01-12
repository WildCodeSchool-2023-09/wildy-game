const bcrypt = require("bcryptjs");
const tables = require("../tables");

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    if (password) {
      const hash = await bcrypt.hash(password, 13);
      req.body.password = hash;
      next();
    } else {
      res.status(400).send("Password is required");
    }
  } catch (error) {
    next(error);
  }
};

const verifyPassword = async (req, res, next) => {
  try {
    const [player] = await tables.player.checkPseudo(req.body.pseudo);
    if (!player) {
      res
        .status(401)
        .json({ error: "Il y'a une erreur dans votre email ou mot de passe" });
    }

    if (await bcrypt.compare(req.body.password, player.password)) {
      delete player.password;
      req.user = player;
      next();
    } else {
      res.status(422).json({
        error: "Oups, il y a une erreur",
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { hashPassword, verifyPassword };
