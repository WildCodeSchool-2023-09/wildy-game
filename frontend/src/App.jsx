import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/root.scss";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
