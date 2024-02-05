// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const result = await tables.boutique.readAll();

    // Respond with the items in JSON format
    res.json(result);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const findById = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const boutique = await tables.boutique.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (boutique == null) {
      res.sendStatus(404);
    } else {
      res.json(boutique);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { prix, avatarId } = req.body;

  try {
    const result = await tables.boutique.update(prix, avatarId, id);
    if (result.affectedRows === 0) {
      return res.status(404).send("Aucun boutique trouvé avec cet ID.");
    }

    return res
      .status(200)
      .send(`L'boutique ayant l'id: ${id} a été mis à jour.`);
  } catch (err) {
    next(err);
    return res.status(500).send("Une erreur s'est produite");
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const boutique = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.boutique.create(boutique);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await tables.boutique.delete(id);

    if (result.affectedRows === 0) {
      res.status(404).send("id pas trouvée");
    } else {
      res
        .status(200)
        .send(`La boutique ayant l'id: ${id} a bien été supprimée`);
    }
  } catch (err) {
    next(err);
  }
};

const filter = async (req, res, next) => {
  try {
    const result = await tables.boutique.getFilter(req.query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addAvatar = async (req, res) => {
  try {
    const result = await tables.boutique.createAvatar(
      req.params.id,
      req.body.avatarId
    );
    if (result === 0) {
      return res.status(400).json({ error: "Avatar déjà dans la collection" });
    }
    if (result === "pas assez de crédits") {
      return res.status(400).json({ error: "Pas assez de crédits" });
    }
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  findById,
  add,
  edit,
  destroy,
  filter,
  addAvatar,
};
