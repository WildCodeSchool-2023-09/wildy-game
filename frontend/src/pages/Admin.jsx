import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { failed } from "../services/toast";

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
  }, []); // Ajoutez un tableau de dépendances vide ici

  if (admin === false) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <p className="text-8xl flex justify-center items-center w-screen h-screen">
        CEST LA PAGE ADMIN LOOOOL
      </p>
    </div>
  );
}

export default Admin;
