import { useState, useEffect } from "react";
import axios from "axios";
import PlayerComponent from "./PlayerComponent";

function PlayerManagement() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/players`, {
        withCredentials: true,
      })
      .then((res) => {
        setPlayers(res.data);
      });
  }, []);
  return (
    <div>
      <div className="grid overflow-auto">
        <div className="admin-player">
          <p className="admin-case1">ID</p>
          <p className="admin-case2">Firstname</p>
          <p className="admin-case1">Lastname</p>
          <p className="admin-case2">Email</p>
          <p className="admin-case1">Pseudo</p>
          <p className="admin-case2">Avatar</p>
          <p className="admin-case1">Banner</p>
          <p className="admin-case2">Credit</p>
          <p className="admin-case1">Experience</p>
          <p className="admin-case2">Admin</p>
          <p className="admin-case1">lvl</p>
          <p className="admin-case2">membreId</p>
          <p className="admin-case1">Theme</p>
          <p className="admin-case2">Supprimer</p>
        </div>
        {players.map((player) => (
          <PlayerComponent player={player} />
        ))}
      </div>
    </div>
  );
}

export default PlayerManagement;
