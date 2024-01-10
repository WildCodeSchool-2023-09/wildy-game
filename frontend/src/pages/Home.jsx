/* eslint-disable react/jsx-props-no-spreading */
import { React, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import ParallaxCoin from "../components/ParallaxCoin";
import UpPage from "../components/UpPage";
import GamesCard from "../components/gamesdisplay/GamesCard";
import borne from "../assets/images/borne_arcade.png";
import start from "../assets/video/wildy_gamy_carre.mp4";
import robot from "../assets/images/robot.png";
import robot2 from "../assets/images/Robotangry.png";
import salle from "../assets/images/lateralement-femmes-jouer-danse-arcade.jpg";
import "../styles/home.scss";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.info(data);
  console.info(errors);

  /* UP BUTTON */
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollPos = useRef(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollPos = window.pageYOffset;

      // Button is displayed after scrolling for 500 pixels
      if (currentScrollPos > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  return (
    <>
      <UpPage
        scrollToTop={scrollToTop}
        isVisible={isVisible}
        prevScrollPos={prevScrollPos}
      />
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
          <div className="robot-container">
            <img src={robot} alt="little robot" className="robot" />
            <img src={robot2} alt="little robot" className="robot2" />
          </div>
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
            <GamesCard />
            <h1 className="h-games">
              Gagne des <span className="coin">WILDY COINS</span> et viens les
              dépenser dans <br />
              la{" "}
              <span className="shop">
                <Link className="link" to="/boutique">
                  Wildy Boutique
                </Link>
              </span>
            </h1>
          </div>
        </section>

        <div className="section-wrapper3">
          <ParallaxCoin />
          <section className="contact" id="contact">
            <div className="contact-container">
              <div className="contact-map">
                <h1>Nos Salles</h1>
                <iframe
                  title="Wildy Gamy"
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.399743615755!2d7.743210411383006!3d48.583044419925145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c84dc1b5befb%3A0xe55e855fc6df9c52!2sPl.%20Kl%C3%A9ber%2C%2067000%20Strasbourg!5e0!3m2!1sfr!2sfr!4v1702654875824!5m2!1sfr!2sfr"
                  width="400"
                  height="300"
                  allowfullscreen=""
                  loading="lazy"
                />
              </div>
              <div className="contact-form-container">
                <h1>Une question, une suggestion ? </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <textarea
                    {...register("Message", {
                      required: true,
                      max: 500,
                      min: 100,
                    })}
                  />

                  <input type="submit" />
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
