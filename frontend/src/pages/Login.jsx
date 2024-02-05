import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../contexts/UserContext";
import borne from "../assets/images/borne_arcade_login.png";
import ParallaxCoin from "../components/ParallaxCoin";
import "../styles/login.scss";
import { success, failed } from "../services/toast";

function Login() {
  const [player, setPlayer] = useState({
    pseudo: "",
    password: "",
  });
  const { user, setUser } = useUser();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlayer({ ...player, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        player,
        { withCredentials: true }
      );

      if (res.status === 200) {
        success(`Bienvenue ${player.pseudo} !`);
        setUser(res.data.player);
        window.localStorage.setItem("player", JSON.stringify(res.data.player));
      }
    } catch (error) {
      console.error(error);
      failed("Mot de passe ou pseudo incorrect");
    }
  };

  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="wrapper-login">
      <ParallaxCoin />
      <div className="container-form">
        <img src={borne} alt="borne" className="borne-arcade" />
        <form onSubmit={handleSubmit} method="post" className="login-form">
          <label htmlFor="pseudo">Pseudonyme</label>
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            value={player.pseudo}
            onChange={handleChange}
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            value={player.password}
            onChange={handleChange}
          />
          <button type="submit" className="btn-connexion">
            CONNEXION
          </button>
          <Link to="/" className="link">
            Mot de passe oublié ?
          </Link>
          <Link to="/signup" className="link">
            Créer un compte
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
