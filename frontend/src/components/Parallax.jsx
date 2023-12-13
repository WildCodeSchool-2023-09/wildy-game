import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import coin from "../assets/images/credit_1.png";
import heart from "../assets/images/heart.png";

export default function ParallaxCoin() {
  return (
    <div className="parallax-div">
      <Parallax pages={2}>
        {/* LAYER 1 */}
        <ParallaxLayer offset={0} speed={-2}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "30px", left: "20px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-2}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "30px", left: "600px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-2.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "200px", left: "400px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-2.5}>
          <img
            src={heart}
            alt="small heart"
            className="w-10"
            style={{ position: "absolute", bottom: "190px", left: "40px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", bottom: "50px", left: "110px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", bottom: "230px", left: "270px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-4.5}>
          <img
            src={coin}
            alt="large pixel coin"
            className="l-coin"
            style={{ position: "absolute", bottom: "300px", left: "20px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-4}>
          <img
            src={coin}
            alt="large pixel coin"
            className="l-coin"
            style={{ position: "absolute", bottom: "130px", left: "500px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-2}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "60px", right: "300px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-3}>
          <img
            src={coin}
            alt="large pixel coin"
            className="l-coin"
            style={{ position: "absolute", top: "0px", right: "20px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-3}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "300px", right: "400px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-2}>
          <img
            src={heart}
            alt="small pixel heart"
            className="w-10"
            style={{ position: "absolute", top: "160px", right: "600px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-3.5}>
          <img
            src={coin}
            alt="large pixel coin"
            className="l-coin"
            style={{ position: "absolute", bottom: "80px", right: "100px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-2.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "100px", left: "200px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-2.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "220px", right: "170px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.5}>
          <img
            src={heart}
            alt="small heart"
            className="w-10"
            style={{ position: "absolute", bottom: "280px", right: "50px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-3.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", bottom: "0px", right: "10px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-3.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", bottom: "100px", right: "520px" }}
          />
        </ParallaxLayer>
        {/* LAYER 2 */}
        <ParallaxLayer offset={1} speed={-2}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "30px", left: "20px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-2}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "30px", left: "600px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-2.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "200px", left: "400px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-2.5}>
          <img
            src={heart}
            alt="small heart"
            className="w-10"
            style={{ position: "absolute", bottom: "190px", left: "40px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-1.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", bottom: "230px", left: "270px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-4.5}>
          <img
            src={coin}
            alt="large pixel coin"
            className="l-coin"
            style={{ position: "absolute", bottom: "300px", left: "20px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-4}>
          <img
            src={coin}
            alt="large pixel coin"
            className="l-coin"
            style={{ position: "absolute", bottom: "130px", left: "500px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-2}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "60px", right: "300px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-3}>
          <img
            src={coin}
            alt="large pixel coin"
            className="l-coin"
            style={{ position: "absolute", top: "0px", right: "20px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-3}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "300px", right: "400px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-2}>
          <img
            src={heart}
            alt="small pixel heart"
            className="w-10"
            style={{ position: "absolute", top: "160px", right: "600px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-3.5}>
          <img
            src={coin}
            alt="large pixel coin"
            className="l-coin"
            style={{ position: "absolute", bottom: "80px", right: "100px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-2.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "100px", left: "200px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-2.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", top: "220px", right: "170px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-3.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", bottom: "100px", right: "520px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-3.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", bottom: "0px", right: "10px" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-3.5}>
          <img
            src={coin}
            alt="small pixel coin"
            className="s-coin"
            style={{ position: "absolute", bottom: "50px", left: "90px" }}
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
