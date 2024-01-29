const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const result = await tables.admin.readAll();
    result.forEach((e) => delete e.password);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};
