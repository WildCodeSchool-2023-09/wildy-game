const bcrypt = require("bcryptjs");

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    if (password) {
      const hash = await bcrypt.hash(password, 13);
      req.body.password = hash;
      next();
    } else {
      res.status(400).send("Password is required");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while hashing the password");
  }
};

module.exports = hashPassword;
