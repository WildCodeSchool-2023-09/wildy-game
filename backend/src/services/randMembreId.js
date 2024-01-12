const tables = require("../tables");

const randMembreId = async (req, _, next) => {
  try {
    let randomNumber = Math.floor(Math.random() * 1000) + 1000;
    let checkNumber = await tables.player.checkMembreId(randomNumber);

    while (checkNumber.length) {
      randomNumber = Math.floor(Math.random() * 1000) + 1000;
      checkNumber = tables.player.checkMembreId(randomNumber);
    }

    if (!checkNumber.length) {
      req.body.membreId = randomNumber;
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = randMembreId;
