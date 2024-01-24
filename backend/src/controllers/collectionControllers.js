// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const collection = await tables.collection.readAll();

    res.json(collection);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
const findById = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const collection = await tables.collection.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (!collection) {
      res.sendStatus(404);
    } else {
      res.json(collection);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  try {
    const collectionToUpdate = {
      id: parseInt(req.params.id, 10),
      ...req.body,
    };
    const result = await tables.collection.update(collectionToUpdate);
    if (result.affectedRows === 0) {
      return res.status(404).send("Collection not found with this ID");
    }
    return res.status(200).send(`Collection ${collectionToUpdate.id} updated`);
  } catch (err) {
    next(err);
  }
  return res.status(200).send("Edit operation completed");
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const newCollection = req.body;
  try {
    const insertId = await tables.collection.create(newCollection);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    const result = await tables.collection.delete(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).send("Collection not found with this ID");
    }
    return res.status(200).send(`Collection ${req.params.id} deleted`);
  } catch (err) {
    next(err);
  }
  return res.status(200).send("Destroy operation completed");
};

const browseByPlayerId = async (req, res, next) => {
  try {
    const collection = await tables.collection.getCollectionByPlayerId(
      req.params.id
    );

    if (!collection) {
      res.sendStatus(404);
    } else {
      res.json(collection);
    }
  } catch (err) {
    next(err);
  }
};

const browseByAvatarId = async (req, res, next) => {
  try {
    const collection = await tables.collection.getCollectionByAvatarId(
      req.params.id
    );

    if (!collection) {
      res.sendStatus(404);
    } else {
      res.json(collection);
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
  browseByPlayerId,
  browseByAvatarId,
};
