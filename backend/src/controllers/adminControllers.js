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

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await tables.player.delete(id);

    if (result.affectedRows === 0) {
      res.status(404).send("id pas trouvée");
    } else {
      res.status(200).send(`Le player ayant l'id: ${id} a bien été supprimée`);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  destroy,
};
