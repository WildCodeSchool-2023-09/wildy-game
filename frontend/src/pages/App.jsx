import { Outlet } from "react-router-dom";
import "../styles/root.scss";
import { useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUser } from "../contexts/UserContext";

function App() {
  const { setUser } = useUser();
  useEffect(() => {
    const player = JSON.parse(window.localStorage.getItem("player"));
    if (player) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/players/${player.id}`)
        .then((res) => {
          setUser(res.data);
          window.localStorage.setItem("player", JSON.stringify(res.data));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  /*   useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/protected`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
        window.localStorage.setItem("CP4_Player", JSON.stringify(res.data));
      })
      .catch((err) => {
        setUser(false);
        window.localStorage.removeItem("CP4_Player");
        console.error(err);
      });
  }, []); */

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
