import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { useUser } from "../contexts/UserContext";
import manette from "../assets/anim_manette.json";
import "../styles/navbar.scss";

function Navbar() {
  const { user } = useUser();
  const [isActive, setIsActive] = useState("");
  const handleClick = (url) => {
    setIsActive(url);
  };

  const [navScrollClass, setNavScrollClass] = useState("");
  const [navSize, setnavSize] = useState("5rem");
  const listenScrollEvent = () => {
    if (window.scrollY > 100) {
      setNavScrollClass("scrolled");
    } else {
      setNavScrollClass("");
    }
    if (window.scrollY > 100) {
      setnavSize("5rem");
    } else {
      setnavSize("70px");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const [theme, setTheme] = useState(true);

  if (theme) {
    document.body.classList.remove("dark");
    document.body.classList.add("default");
  } else {
    document.body.classList.remove("default");
    document.body.classList.add("dark");
  }
  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <nav
      className={`navbar ${navScrollClass}`}
      style={{ height: navSize, transition: "all 1s" }}
    >
      <NavHashLink
        onClick={handleClick}
        className={`link ${isActive ? "is-active" : ""}`}
        to="/#home"
      >
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
          <NavHashLink
            onClick={() => handleClick("infos")}
            className={`link ${isActive === "infos" && "is-active"}`}
            to="/#infos"
          >
            Infos
          </NavHashLink>
        </li>
        <li>
          {" "}
          <NavHashLink
            onClick={() => handleClick("games")}
            className={`link ${isActive === "games" && "is-active"}`}
            to="/#games"
          >
            Jeux{" "}
          </NavHashLink>
        </li>
        <li>
          {" "}
          <NavHashLink
            onClick={() => handleClick("contact")}
            className={`link ${isActive === "contact" && "is-active"}`}
            to="/#contact"
          >
            Nos Salles{" "}
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            onClick={() => handleClick("boutique")}
            className={`link ${isActive === "boutique" && "is-active"}`}
            to="boutique"
          >
            Boutique
          </NavHashLink>
        </li>
        {user.isAdmin ? (
          <li>
            <NavHashLink
              onClick={() => handleClick("admin")}
              className={`link ${isActive === "admin" && "is-active"}`}
              to="admin"
            >
              Admin
            </NavHashLink>
          </li>
        ) : null}
      </ul>
      <div className="navbar-right">
        {user ? (
          <a href="/">Avatar</a>
        ) : (
          <NavHashLink
            onClick={() => handleClick("login")}
            className={`link ${isActive === "login" && "is-active"}`}
            to="login"
          >
            {user ? "EST CONNECTE" : "LOGIN"}
          </NavHashLink>
        )}
        {theme ? (
          <button className="theme" type="button" onClick={() => handleTheme()}>
            🌙
          </button>
        ) : (
          <button className="theme" type="button" onClick={() => handleTheme()}>
            ☀️
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
