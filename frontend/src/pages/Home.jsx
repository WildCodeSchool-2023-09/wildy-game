import React from "react";
import ParallaxCoin from "../components/ParallaxCoin";
import borne from "../assets/images/borne_arcade.png";
import start from "../assets/video/wildy_gamy_carre.mp4";
import salle from "../assets/images/lateralement-femmes-jouer-danse-arcade.jpg";
import "../styles/home.scss";

export default function Home() {
  return (
    <>
      <div className="wrapper-home" id="home">
        <ParallaxCoin />
        <div className="container-home">
          <img src={borne} alt="borne home" className="borne-arcade" />
          <video
            autoPlay
            loop
            controls={false}
            playsInline
            muted
            className="start-video"
          >
            <source src={start} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="section-wrapper">
        <ParallaxCoin />
        <section className="infos" id="infos">
          <div className="infos-container">
            <img src={salle} alt="" />
            <div className="line" />
            <div className="infos-content">
              <h1>WILDY GAMY</h1>
              <p>
                Bienvenue dans l'épopée de "Wildy Gamy" ! Embarquez pour un
                voyage exceptionnel au cœur de notre monde virtuel où des jeux
                inédits vous attendent. Chaque victoire vous rapproche de
                récompenses précieuses, uniques et échangeables, offrant une
                nouvelle dimension à votre expérience de jeu. Rejoignez notre
                communauté dynamique et transformez vos succès virtuels en
                aventures palpitantes dans notre salle d'arcade futuriste.{" "}
                <br />
                Avec "Wildy Gamy", votre quête ne se limite pas au virtuel :
                elle s'étend à des expériences réelles et mémorables. Prêts pour
                l'aventure ? Votre voyage extraordinaire commence maintenant !
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="section-wrapper2">
        <ParallaxCoin />
        <section className="games" id="games">
          <div className="games-container">
            <div className="games-cards">
              <div className="game1">
                <div className="game-button">
                  <button type="button">START</button>
                </div>
              </div>
              <div className="game2">
                <div className="game-button">
                  <button type="button">START</button>
                </div>
              </div>
              <div className="game3">
                <div className="game-button">
                  <button type="button">START</button>
                </div>
              </div>
            </div>
            <h1 className="h-games">
              Gagne des <span className="coin">WILDY COINS</span> et viens les
              dépenser dans <br />
              la <span className="shop">Wildy Boutique</span>
            </h1>
          </div>
        </section>

        <div className="section-wrapper3">
          <ParallaxCoin />
          <section className="contact" id="contact">
            <div className="contact-container">
              {/* <div className="contact-map">

              </div>
              <div className="contact-form">

              </div> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
