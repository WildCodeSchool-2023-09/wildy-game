import React from "react";
import ParallaxCoin from "../components/ParallaxCoin";
import borne from "../assets/images/borne_arcade.png";
import start from "../assets/video/wildy_gamy_carre.mp4";

import "../styles/home.scss";

export default function Home() {
  return (
    <div className="wrapper-home">
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
  );
}
