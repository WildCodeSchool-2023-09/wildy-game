const Joi = require("joi");
const tables = require("../tables");

const playerSchema = Joi.object({
  firstname: Joi.string()
    .regex(/^[A-Za-z]+$/)
    .required(),
  lastname: Joi.string()
    .regex(/^[A-Za-z]+$/)
    .required(),
  pseudo: Joi.string().alphanum().required(),
  password: Joi.string().min(8).required(),
  email: Joi.string().email().max(255).required(),
});

const inscription = async (req, res, next) => {
  const errors = [];
  const { firstname, lastname, pseudo, password, email } = req.body;

  if (!firstname || !lastname || !pseudo || !password || !email) {
    return res.status(400).json({ error: "Il manque un/ou plusieurs champs" });
  }
  const { error } = playerSchema.validate(
    { firstname, lastname, pseudo, password, email },
    { abortEarly: false }
  );

  if (error) {
    return res.status(422).json({ validationErrors: error.details });
  }
  const existEmail = await tables.player.checkEmail(email);
  if (existEmail.length !== 0) {
    errors.push({ champ: "email", message: "Email déjà utilisé" });
  }

  const existPseudo = await tables.player.checkPseudo(pseudo);
  if (existPseudo.length !== 0) {
    errors.push({ champ: "pseudo", message: "Pseudo déjà utilisé" });
  }

  if (errors.length !== 0) {
    return res.status(409).json({ validationErrors: errors });
  }
  return next();
};

module.exports = inscription;
