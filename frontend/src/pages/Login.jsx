import borne from "../assets/images/borne_arcade_login.png";
import ParallaxCoin from "../components/ParallaxCoin";
import "../styles/login.scss";

function Login() {
  return (
    <div className="wrapper">
      <ParallaxCoin />
      <div className="container-form">
        <img src={borne} alt="borne" className="borne-arcade" />
        <form action="post" className="login-form">
          <label htmlFor="user">Nom d'utilisateur</label>
          <input type="text" name="user" id="user" />
          <label htmlFor="password">Mot de passe</label>
          <input type="text" name="password" id="user" />
          <p>Mot de passe oublié ?</p>
          <button type="button">CONNEXION</button>
          <p>Créer un compte</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
