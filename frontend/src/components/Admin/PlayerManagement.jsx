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
          <p className="admin-case1 bg-gray-600 text-white">ID</p>
          <p className="admin-case2 bg-gray-600 text-white">Firstname</p>
          <p className="admin-case1 bg-gray-600 text-white">Lastname</p>
          <p className="admin-case2 bg-gray-600 text-white">Email</p>
          <p className="admin-case1 bg-gray-600 text-white">Pseudo</p>
          <p className="admin-case2 bg-gray-600 text-white">Avatar</p>
          <p className="admin-case1 bg-gray-600 text-white">Banner</p>
          <p className="admin-case2 bg-gray-600 text-white">Credit</p>
          <p className="admin-case1 bg-gray-600 text-white">Experience</p>
          <p className="admin-case2 bg-gray-600 text-white">Admin</p>
          <p className="admin-case1 bg-gray-600 text-white">lvl</p>
          <p className="admin-case2 bg-gray-600 text-white">membreId</p>
          <p className="admin-case1 bg-gray-600 text-white">Theme</p>
          <p className="admin-case2 bg-gray-600 text-white">Supprimer</p>
        </div>
        {players.map((player) => (
          <PlayerComponent player={player} />
        ))}
      </div>
    </div>
  );
}

export default PlayerManagement;
