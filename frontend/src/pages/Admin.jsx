import { useEffect, useState } from "react";
import { Navigate, Outlet, NavLink } from "react-router-dom";
import axios from "axios";
import { failed } from "../services/toast";
import "../styles/admin.scss";

function Admin() {
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3310/api/admin", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          setAdmin(true);
        }
      })
      .catch(() => {
        failed("Vous n'êtes pas connecté en tant qu'admin");
        setAdmin(false);
      });
  }, []);

  if (admin === false) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="bg-gray-400 flex w-screen min-h-screen flex-col pt-[80px]">
      <div className="flex gap-4 mx-auto text-2xl bg-white w-full h-20 items-center p-2 overflow-auto">
        <p>Gerer :</p>
        <NavLink to="player" className="admin-link">
          Joueur
        </NavLink>
        <div className="w-[2px] h-10 bg-black" />
        <NavLink to="boutique" className="admin-link">
          Boutique
        </NavLink>
        <div className="w-[2px] h-10 bg-black" />
        <NavLink to="bons" className="admin-link">
          Bons
        </NavLink>
      </div>
      <div className="outlet-admin p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
