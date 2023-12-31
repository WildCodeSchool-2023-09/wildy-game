import { Link } from "react-router-dom";
import borne from "../assets/images/borne_arcade_login.png";
import ParallaxCoin from "../components/ParallaxCoin";
import "../styles/login.scss";

function Login() {
  return (
    <div className="wrapper-login">
      <ParallaxCoin />
      <div className="container-form">
        <img src={borne} alt="borne" className="borne-arcade" />
        <form action="post" className="login-form">
          <label htmlFor="user">Nom d'utilisateur</label>
          <input type="text" name="user" id="user" />
          <label htmlFor="password">Mot de passe</label>
          <input type="text" name="password" id="user" />
          <button type="button" className="btn-connexion">
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
