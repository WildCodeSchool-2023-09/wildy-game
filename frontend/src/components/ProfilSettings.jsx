import ExpBar from "./ExpBar";

import randomAvatar from "../../public/Boutique/ImageRandom2.png";

export default function ProfilSettings() {
  return (
    <div className="settings-wrapper">
      <div className="profil-header">
        {/* background banner */}
        <img src={randomAvatar} alt="" className="avatar" />
      </div>
      <div className="settings-container">
        <aside className="settings-menu">
          <h1>Mon compte</h1>
          <h2>Pseudo</h2>
          <h2>adress@mail.com</h2>
          <ul>
            <li>Modifier mes informations</li>
            <li>Historique d'achats</li>
            <li>À propos</li>
          </ul>
        </aside>
        <div className="settings-content">
          <div className="exp-wrapper">
            <ExpBar />
            <p className="title">TITRE</p>
          </div>

          <button type="button">Personnaliser le profil</button>
        </div>
      </div>
    </div>
  );
}
