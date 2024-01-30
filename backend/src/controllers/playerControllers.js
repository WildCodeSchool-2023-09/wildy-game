// Import access to database tables
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
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
      delete player.password;
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

  try {
    const playerToUpdate = {
      id,
      ...req.body,
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
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const addBanner = async (req, res, next) => {
  const banner = req.file;
  console.info(banner);
  const extension = path.extname(banner.originalname);
  await new Promise((resolve, reject) => {
    fs.rename(
      `${banner.destination}/${banner.filename}`,
      `${banner.destination}/${banner.filename}${extension}`,
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ error: "Token non fournie" });
  }
  try {
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    const insertId = await tables.player.createBanner(
      banner,
      decoded.player.id,
      extension
    );

    res.status(200).json({ insertId });
  } catch (err) {
    next(err);
  }

  return null;
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

const login = async (req, res, next) => {
  try {
    const player = req.user;
    const token = jwt.sign({ player }, process.env.APP_SECRET);
    res.cookie("token", token, { httpOnly: true });
    res.json({ player });
  } catch (err) {
    next(err);
  }
};
const logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
const adminAddCode = async (req, res) => {
  try {
    const insertId = await tables.player.createCode(req.body.credit);
    res.status(201).json({ insertId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const addCredit = async (req, res) => {
  try {
    const result = await tables.player.useCode(req.body.code, req.body.id);
    if (result === 0 || result === "déjà utilisé") {
      if (result === 0) {
        return res.status(400).json({ error: "Code invalide / inexistant" });
      }
      return res.status(400).json({ error: "Code déjà utilisé" });
    }
    return res.status(201).json({ gain: result });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const readByPseudo = async (req, res) => {
  try {
    const result = await tables.player.readByUsername(req.params.pseudo);
    if (!result) {
      return res.status(404).json({ error: "Introuvable" });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const editAvatar = async (req, res) => {
  try {
    const result = await tables.player.updateAvatar(
      req.params.id,
      req.body.avatarId
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Joueur ou avatar incorrect" });
    }
    return res.sendStatus(200);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const findByAvatar = async (req, res) => {
  try {
    const result = await tables.player.getAvatar(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Introuvable" });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const modifyTheme = async (req, res) => {
  try {
    const result = await tables.player.updateTheme(
      req.body.profilTheme,
      req.params.id
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Un erreur est survenue" });
    }
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const modifyAvatarColor = async (req, res) => {
  try {
    const result = await tables.player.updateAvatarColor(
      req.body.avatarColor,
      req.params.id
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Un erreur est survenue" });
    }
    return res.sendStatus(200);
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
  login,
  addBanner,
  adminAddCode,
  addCredit,
  logout,
  readByPseudo,
  editAvatar,
  findByAvatar,
  modifyTheme,
  modifyAvatarColor,
};
