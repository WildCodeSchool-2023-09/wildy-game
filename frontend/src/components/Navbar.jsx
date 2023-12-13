import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import manette from "../assets/anim_manette.json";
import "../styles/navbar.scss";

function Navbar() {
  const [login, setLogin] = useState(false);

  console.error(setLogin);
  return (
    <nav className="navbar">
      <NavLink to="/">
        <Player
          autoplay
          keepLastFrame
          src={manette}
          style={{ height: "40px" }}
          className="navbar-left"
        />
      </NavLink>

      <ul className="navbar-middle">
        <li>Infos</li>
        <li>Jeux</li>
        <li>Nos salles</li>
        <li>
          <NavLink to="boutique">Boutique</NavLink>
        </li>
      </ul>
      <div className="navbar-right">
        {login ? (
          <p>Avatar</p>
        ) : (
          <p>
            <NavLink to="login">LOG IN</NavLink>
          </p>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
