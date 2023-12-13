import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/root.scss";
import ParallaxCoin from "./components/Parallax";

function App() {
  return (
    <div className="main">
      <Navbar />
      <ParallaxCoin />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
