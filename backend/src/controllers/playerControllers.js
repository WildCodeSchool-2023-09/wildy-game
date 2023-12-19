// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const players = await tables.player.readAll();

    // Respond with the items in JSON format
    res.json(players);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const findById = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const player = await tables.player.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (player == null) {
      res.sendStatus(404);
    } else {
      res.json(player);
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
  const {
    firstname,
    lastname,
    pseudo,
    password,
    email,
    experience,
    credit,
    membreId,
    profilTheme,
    lvl,
    isAdmin,
  } = req.body;

  try {
    const playerToUpdate = {
      id,
      firstname,
      lastname,
      pseudo,
      password,
      email,
      experience,
      credit,
      membreId,
      profilTheme,
      lvl,
      isAdmin,
    };
    const result = await tables.player.update(playerToUpdate);
    if (result.affectedRows === 0) {
      return res.status(404).send("Aucun player trouvé avec cet ID.");
    }
    return res
      .status(200)
      .send(`Le player ayant l'id: ${id} a été mis à jour.`);
  } catch (err) {
    // Only pass the error to the next middleware, don't send a response here
    return next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const joueur = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.player.create(joueur);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId }); // <--- {insertID} est une syntaxe raccourcie! C'est possible en JS
    // quand la clé et la valeur sont identiques.
    // je pourrais écrire à la place {insertId : insertId}. Enfin si ESlint m'autorisait.
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
// Ready to export the controller functions

module.exports = {
  browse,
  findById,
  add,
  edit,
  destroy,
};
