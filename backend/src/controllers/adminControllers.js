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

const browseBons = async (req, res) => {
  try {
    const result = await tables.player.getAllBons();
    if (result.length === 0) {
      return res.status(404).send("Aucun bon disponible");
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const destroyCode = async (req, res) => {
  try {
    const result = await tables.player.deleteCode(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Un erreur est survenue" });
    }
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  browse,
  destroy,
  browseBons,
  destroyCode,
};
