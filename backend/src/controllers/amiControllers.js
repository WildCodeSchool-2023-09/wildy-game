const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const amis = await tables.amis.readAll();

    res.json(amis);
  } catch (err) {
    next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    const amis = await tables.amis.read(req.params.id);

    if (!amis) {
      res.sendStatus(404);
    } else {
      res.json(amis);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const amis = await tables.amis.update(req.body);
    res.json(amis);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  findById,
  edit,
};
