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
  // ??? erreur Eslint inconnue : Expected to return a value at the end of async arrow function
  const id = parseInt(req.params.id, 10); // Si quelqu'un peut m'expliquer ce qu'est un *** de radix ! J'ai rien compris mais sur internet
  // ils disaient de mettre 10 pour un nombre décimal.. et surtout pourquoi soudainement c'est important.
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
    return res
      .status(500)
      .send(
        "Une erreur s'est produite"
      ); /* Il a fallu que j'ajoute un return ici
    pour résoudre le soucis Eslint qui se déclarait à l'ouverture de la fonction edit (voir plus haut) */
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
    const result = await tables.boutique.delete(id);

    if (result.affectedRows === 0) {
      res.status(404).send("id pas trouvée");
    } else {
      res.status(200).send(`L'boutique ayant l'id: ${id} a bien été supprimée`);
    }
  } catch (err) {
    next(err);
  }
};

const commonFilter = async (req, res, next) => {
  try {
    const result = await tables.boutique.common();
    res.json(result);
  } catch (err) {
    next(err);
  }
};
const commonRare = async (req, res, next) => {
  try {
    const result = await tables.boutique.rare();
    res.json(result);
  } catch (err) {
    next(err);
  }
};
const commonEpic = async (req, res, next) => {
  try {
    const result = await tables.boutique.epic();
    res.json(result);
  } catch (err) {
    next(err);
  }
};
const commonLegendary = async (req, res, next) => {
  try {
    const result = await tables.boutique.legendary();
    res.json(result);
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
  commonFilter,
  commonRare,
  commonEpic,
  commonLegendary,
};
