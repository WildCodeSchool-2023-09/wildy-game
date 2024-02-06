const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ error: "Token non fournie" });
  }
  try {
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    if (decoded.player.isAdmin === 0) {
      return res.sendStatus(403);
    }
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalide" });
  }
};

const checkToken = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(403).send("Token non fourni");
  }
  try {
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    if (decoded) {
      req.decoded = decoded.player;
      return next();
    }
    res.clearCookie("token");
    return res.status(403).json({ error: "Token invalide" });
  } catch (error) {
    res.clearCookie("token");
    return res.status(403).json({ error: "Token invalide" });
  }
};

module.exports = { verifyToken, checkToken };
