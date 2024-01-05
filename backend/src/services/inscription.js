const Joi = require("joi");
const tables = require("../tables");

const playerSchema = Joi.object({
  email: Joi.string().email().max(255).required(),
});

const inscription = (req, res, next) => {
  const { email } = req.body;
  const { error } = playerSchema.validate({ email }, { abortEarly: false });

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  }
  const existe = tables.player.checkEmail(email);
  if (existe.length !== 0) {
    res.status(409).json({ Erreur: "email déjà utilisé" });
  }
  next();
};

module.exports = inscription;
