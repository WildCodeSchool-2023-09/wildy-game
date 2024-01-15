const jwt = require("jsonwebtoken");

const verifyToken = (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ error: "Token non fournie" });
  }
  try {
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    return res.status(200).json(decoded.player);
  } catch (error) {
    return res.status(401).json({ error: "Token invalide" });
  }
};

module.exports = { verifyToken };
