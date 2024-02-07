import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute() {
  const [allowed, setAllowed] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/protected`, {
        withCredentials: true,
      })
      .then(() => {
        setAllowed(true);
      })
      .catch((err) => {
        navigate("/login", { replace: true });
        console.error(err);
      });
  }, []);

  if (!allowed) return null;
  return <Outlet />;
}

export default ProtectedRoute;
