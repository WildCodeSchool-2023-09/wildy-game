const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const avatarControllers = require("./controllers/avatarControllers");

router.get("/avatars", avatarControllers.browse);
router.get("/avatars/:id", avatarControllers.findById);
router.post("/avatars", avatarControllers.add);
router.put("/avatars/:id", avatarControllers.edit);
router.delete("/avatars/:id", avatarControllers.destroy);

/* ************************************************************************* */

const playerControllers = require("./controllers/playerControllers");
const inscription = require("./services/inscription");
const hashPassword = require("./services/hashPassword");

router.get("/players", playerControllers.browse);
router.get("/players/:id", playerControllers.findById);
router.post("/players", inscription, hashPassword, playerControllers.add);
router.put("/players/:id", playerControllers.edit);
router.delete("/players/:id", playerControllers.destroy);

/* ************************************************************************* */

const boutiqueControllers = require("./controllers/boutiqueControllers");

router.get("/boutique/filter", boutiqueControllers.filter);
router.get("/boutique", boutiqueControllers.browse);
router.get("/boutique/:id", boutiqueControllers.findById);
router.post("/boutique", boutiqueControllers.add);
router.put("/boutique/:id", boutiqueControllers.edit);
router.delete("/boutique/:id", boutiqueControllers.destroy);

module.exports = router;
