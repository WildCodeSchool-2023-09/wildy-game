const tables = require("../tables");

const browse = async (req, res) => {
  try {
    const result = await tables.admin.readAll();
    result.forEach((e) => delete e.password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  browse,
};
