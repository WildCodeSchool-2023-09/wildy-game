import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import manette from "../assets/anim_manette.json";
import "../styles/navbar.scss";

function Navbar() {
  const [login, setLogin] = useState(false);

  console.error(setLogin);
  return (
    <nav className="navbar">
      <NavHashLink to="/#home">
        <Player
          autoplay
          keepLastFrame
          src={manette}
          style={{ height: "40px" }}
          className="navbar-left"
        />
      </NavHashLink>

      <ul className="navbar-middle">
        <li>
          <NavHashLink to="#infos">Infos</NavHashLink>
        </li>
        <li>
          {" "}
          <NavHashLink>Jeux </NavHashLink>
        </li>
        <li>Nos salles</li>
        <li>
          <NavHashLink to="boutique">Boutique</NavHashLink>
        </li>
      </ul>
      <div className="navbar-right">
        {login ? (
          <p>Avatar</p>
        ) : (
          <p>
            <NavHashLink to="login">LOG IN</NavHashLink>
          </p>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
