import { Outlet } from "react-router-dom";
import "../styles/root.scss";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUser } from "../contexts/UserContext";

function App() {
  const { setUser } = useUser();
  useEffect(() => {
    const player = JSON.parse(window.localStorage.getItem("player"));
    if (player) {
      setUser(player);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
