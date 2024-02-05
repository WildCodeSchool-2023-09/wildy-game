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
          <p className="font-mont font-bold border border-black p-2 bg-white">
            ID
          </p>
          <p className="font-mont font-bold border border-black p-2 bg-gray-300">
            Firstname
          </p>
          <p className="font-mont font-bold border border-black p-2 bg-white">
            Lastname
          </p>
          <p className="font-mont font-bold border border-black p-2 bg-gray-300">
            Email
          </p>
          <p className="font-mont font-bold border border-black p-2 bg-white">
            Pseudo
          </p>
          <p className="font-mont font-bold border border-black p-2 bg-gray-300">
            Avatar
          </p>
          <p className="font-mont font-bold border border-black p-2 bg-white">
            Banner
          </p>
          <p className="font-mont font-bold border border-black p-2 bg-gray-300">
            Credit
          </p>
          <p className="font-mont font-bold border border-black p-2 bg-white">
            Experience
          </p>
          <p className="font-mont font-bold border border-black p-2 bg-gray-300">
            Admin
          </p>
          <p className="font-mont font-bold border border-black p-2 bg-white">
            lvl
          </p>
          <p className="font-mont font-bold border border-black p-2 bg-gray-300">
            membreId
          </p>
          <p className="font-mont font-bold border border-black p-2 bg-white">
            Theme
          </p>
          <p className="font-mont font-bold border border-black p-2 bg-gray-300">
            Supprimer
          </p>
        </div>
        {players.map((player) => (
          <PlayerComponent player={player} />
        ))}
      </div>
    </div>
  );
}

export default PlayerManagement;
