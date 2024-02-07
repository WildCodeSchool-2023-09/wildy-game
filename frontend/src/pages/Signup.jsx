import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import borne from "../assets/images/borne_arcade_signup.png";
import ParallaxCoin from "../components/ParallaxCoin";
import "../styles/login.scss";
import { success, failed } from "../services/toast";

function Signup() {
  const [created, setCreated] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    pseudo: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (user.password !== confirmPassword) {
      failed("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/players`,
        user
      );
      if (res.status === 201) {
        success("Vous êtes bien enregistré!");
        setCreated(true);
      }
    } catch (error) {
      if (error.response.status === 400) {
        failed("Veuillez remplir tous les champs");
      } else if (error.response.status === 409) {
        failed("Ce pseudo/email existe déjà");
      } else {
        failed("Erreur lors de l'enregistrement");
      }
    }
  };

  if (created) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="wrapper-login">
      <ParallaxCoin />
      <div className="container-form">
        <img src={borne} alt="borne" className="borne-arcade" />
        <form
          onSubmit={handleSubmit}
          method="post"
          className="login-form"
          id="signup"
        >
          <div className="top-signup">
            <div className="signup-column">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="signup-column">
              <label htmlFor="pseudo">Pseudo</label>
              <input
                type="text"
                name="pseudo"
                id="pseudo"
                value={user.pseudo}
                onChange={handleChange}
              />
            </div>
            <div className="signup-column">
              <label htmlFor="firstname">Prénom</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={user.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="signup-column">
              <label htmlFor="lastname">Nom</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={user.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="signup-column">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="signup-column">
              <label htmlFor="password2">Mot de passe</label>
              <input
                type="password"
                name="password2"
                id="password2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn-connexion">
            Inscription
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
