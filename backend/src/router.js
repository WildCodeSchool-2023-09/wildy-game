const express = require("express");
const multer = require("multer");

const router = express.Router();

const upload = multer({ dest: "public/assets/banniere" });

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
const { hashPassword, verifyPassword } = require("./services/hashPassword");
const randMembreId = require("./services/randMembreId");
const { verifyToken, verifyTokenFirstLogin } = require("./services/jwt");

router.put("/players/avatar/:id", playerControllers.editAvatar);
router.get("/players/avatar/:id", playerControllers.findByAvatar);
router.get("/players", playerControllers.browse);
router.get("/players/:id", playerControllers.findById);
router.post(
  "/players",
  inscription,
  hashPassword,
  randMembreId,
  playerControllers.add
);
router.put("/players/:id", playerControllers.edit);
router.delete("/players/:id", playerControllers.destroy);
router.post("/login", verifyPassword, playerControllers.login);
router.get("/logout", playerControllers.logout);
router.post("/banner", upload.single("banner"), playerControllers.addBanner);
router.get("/admin", verifyTokenFirstLogin);
router.post("/admin/addcode", playerControllers.adminAddCode);
router.post("/players/addcredit", playerControllers.addCredit);
router.get("/player/:pseudo", playerControllers.readByPseudo);
router.put("/players/:id/addtheme", playerControllers.modifyTheme);
/* ************************************************************************* */

const boutiqueControllers = require("./controllers/boutiqueControllers");

router.get("/boutique/filter", boutiqueControllers.filter);
router.get("/boutique", boutiqueControllers.browse);
router.get("/boutique/:id", boutiqueControllers.findById);
router.post("/boutique", boutiqueControllers.add);
router.put("/boutique/:id", boutiqueControllers.edit);
router.delete("/boutique/:id", boutiqueControllers.destroy);
router.post("/boutique/avatar/:id", boutiqueControllers.addAvatar);

/* ************************************************************************* */

const collectionControllers = require("./controllers/collectionControllers");

router.get("/collection", collectionControllers.browse);
router.get("/collection/:id", collectionControllers.findById);
router.post("/collection", collectionControllers.add);
router.put("/collection/:id", collectionControllers.edit);
router.delete("/collection/:id", collectionControllers.destroy);
router.get("/collection/player/:id", collectionControllers.browseByPlayerId);
router.get("/collection/avatar/:id", collectionControllers.browseByAvatarId);
router.get(
  "/collection/avatars/:id",
  collectionControllers.browseAvatarsByPlayerId
);
/* ************************************************************************* */

// Admin
const adminControllers = require("./controllers/adminControllers");

router.get("/admin/players", verifyToken, adminControllers.browse);
router.delete("/admin/players/:id", verifyToken, adminControllers.destroy);

module.exports = router;
