import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import manette from "../assets/anim_manette.json";
import "../styles/navbar.scss";

function Navbar() {
  const [login, setLogin] = useState(false);

  console.error(setLogin);
  return (
    <nav className="navbar">
      <Player
        autoplay
        keepLastFrame
        src={manette}
        style={{ height: "40px" }}
        className="navbar-left"
      />

      <ul className="navbar-middle">
        <li>Infos</li>
        <li>Jeux</li>
        <li>Nos salles</li>
        <li>Boutique</li>
      </ul>
      <div className="navbar-right">
        {login ? <p>Avatar</p> : <p>LOG IN</p>}
      </div>
    </nav>
  );
}

export default Navbar;
