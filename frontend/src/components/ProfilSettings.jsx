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
            <p className="title">player.title</p>
          </div>
          <button type="button">Personnaliser le profil</button>
          <section className="fav-games">
            <h1>JEUX FAVORIS</h1>
            <div className="games-cards">------fav games------</div>
          </section>
          <section className="collection">
            <h1>COLLECTION</h1>
            <div className="collection-content">------items------</div>
          </section>
          <section className="profil-hv">
            <h1>PROPOSER DES ITEMS À L'ÉCHANGE</h1>
            <div className="profil-hv-content">------items on sale------</div>
          </section>
          <section className="friends">
            <h1>AMIS</h1>
            <div className="friends-content">------friends------</div>
          </section>
        </div>
      </div>
    </div>
  );
}
