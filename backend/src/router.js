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

const playerControllers = require("./controllers/playerControllers");

router.get("/players", playerControllers.browse);
router.get("/players/:id", playerControllers.findById);
router.post("/players", playerControllers.add);
router.put("/players/:id", playerControllers.edit);
router.delete("/players/:id", playerControllers.destroy);

module.exports = router;
