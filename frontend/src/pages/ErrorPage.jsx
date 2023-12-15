import { Link } from "react-router-dom";
import borne from "../assets/images/borne_arcade_404.png";
import ParallaxCoin from "../components/ParallaxCoin";
import start from "../assets/video/wildy_gamy_gameover_carre.mp4";
import "../styles/home.scss";

function ErrorPage() {
  return (
    <Link to="/">
      <div className="wrapper-home">
        <ParallaxCoin />

        <div className="container-home">
          <img src={borne} alt="borne 404" className="borne-arcade" />
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
    </Link>
  );
}

export default ErrorPage;
