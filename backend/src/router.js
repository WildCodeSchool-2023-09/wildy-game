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

module.exports = router;
