import { useState } from "react";
import ExpBar from "./ExpBar";

import randomAvatar from "../assets/images/ImageRandom2.png";
import FavGames from "./settingsComponents/FavGames";
import Collection from "./settingsComponents/Collection";
import Hv from "./settingsComponents/Hv";
import ProfilTheme from "./settingsComponents/ProfilTheme";
import Friends from "./settingsComponents/Friends";

export default function ProfilSettings() {
  const [editmode, setEditmode] = useState(false);
  /* PROFIL THEME */
  const [primaryColor, setPrimaryColor] = useState("#ffffff");
  const [secondaryColor, setSecondaryColor] = useState("#b4b4b4");
  const [textColor, setTextColor] = useState("#ffffff");

  return (
    <div className="settings-wrapper">
      <div className="profil-header">
        {/* background banner */}
        <img src={randomAvatar} alt="" className="avatar" />
      </div>
      <div
        className={`settings-container ${editmode && "justify-center"}`}
        style={{ backgroundColor: primaryColor }}
      >
        {editmode === false && (
          <aside className="settings-menu">
            <h1>Mon compte</h1>
            <h2>player.pseudo</h2>
            <h2>player.email</h2>
            <ul>
              <li>Modifier mes informations</li>
              <li>Historique d'achats</li>
              <li>À propos</li>
            </ul>
          </aside>
        )}
        <div className="settings-content">
          <div className="exp-wrapper">
            <ExpBar />
            <p className="title">player.title</p>
          </div>

          <button type="button" onClick={() => setEditmode(!editmode)}>
            {editmode ? "Valider" : "Personnaliser le profil"}
          </button>
          {editmode && (
            <ProfilTheme
              primaryColor={primaryColor}
              setPrimaryColor={setPrimaryColor}
              secondaryColor={secondaryColor}
              setSecondaryColor={setSecondaryColor}
              textColor={textColor}
              setTextColor={setTextColor}
            />
          )}
          <FavGames
            editmode={editmode}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
          <Collection
            editmode={editmode}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
          <Hv
            editmode={editmode}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
          <Friends
            editmode={editmode}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
        </div>
      </div>
    </div>
  );
}
