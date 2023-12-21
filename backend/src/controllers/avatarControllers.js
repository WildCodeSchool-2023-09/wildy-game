// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const avatars = await tables.avatar.readAll();

    // Respond with the items in JSON format
    res.json(avatars);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const findById = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const avatar = await tables.avatar.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (avatar == null) {
      res.sendStatus(404);
    } else {
      res.json(avatar);
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

  const { name, image, rarity } = req.body;

  try {
    const avatarToUpdate = {
      id,
      name,
      image,
      rarity,
    };
    const result = await tables.avatar.update(avatarToUpdate);
    if (result.affectedRows === 0) {
      return res.status(404).send("Aucun avatar trouvé avec cet ID.");
    }

    return res.status(200).send(`L'avatar ayant l'id: ${id} a été mis à jour.`);
  } catch (err) {
    next(err);
    return res.status(500).send("Une erreur s'est produite");
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const avatar = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.avatar.create(avatar);

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
    const result = await tables.avatar.delete(id);

    if (result.affectedRows === 0) {
      res.status(404).send("id pas trouvée");
    } else {
      res.status(200).send(`L'avatar ayant l'id: ${id} a bien été supprimée`);
    }
  } catch (err) {
    next(err);
  }
};
// Ready to export the controller functions
module.exports = {
  browse,
  findById,
  add,
  edit,
  destroy,
};
