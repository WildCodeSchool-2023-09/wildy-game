const jwt = require("jsonwebtoken");

const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ error: "Token non fournie" });
  }
  try {
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    if (decoded.player.isAdmin === 0) {
      return res.sendStatus(403);
    }
    return res.sendStatus(200);
  } catch (error) {
    return res.status(401).json({ error: "Token invalide" });
  }
};

module.exports = { verifyToken };
