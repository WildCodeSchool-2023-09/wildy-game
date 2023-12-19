import borne from "../assets/images/borne_arcade_signup.png";
import ParallaxCoin from "../components/ParallaxCoin";
import "../styles/login.scss";

function SignUp() {
  return (
    <div className="wrapper-login">
      <ParallaxCoin />
      <div className="container-form">
        <img src={borne} alt="borne" className="borne-arcade" />
        <form action="post" className="login-form">
          <div className="top-signup">
            <div className="signup-column">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="signup-column">
              <label htmlFor="user">Nom d'utilisateur</label>
              <input type="text" name="user" id="user" />
            </div>
          </div>

          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="password-confirm">Confirmer le mot de passe</label>
          <input
            type="password"
            name="password-confirm"
            id="password-confirm"
          />
          <button type="button" className="btn-connexion">
            Inscription
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
