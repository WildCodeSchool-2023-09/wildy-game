import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ExpBar from "./ExpBar";

import FavGames from "./settingsComponents/FavGames";
import Collection from "./settingsComponents/Collection";
import Friends from "./settingsComponents/Friends";

export default function ProfilVisiteur() {
  const { pseudo } = useParams();
  const [player, setPlayer] = useState({});
  const [primaryColor, setPrimaryColor] = useState("#ffffff");
  const [secondaryColor, setSecondaryColor] = useState("#b4b4b4");
  const [textColor, setTextColor] = useState("#ffffff");
  console.info(setPrimaryColor);
  console.info(setSecondaryColor);
  console.info(setTextColor);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/player/${pseudo}`)
      .then((res) => {
        setPlayer(res.data);
      })
      .catch((err) => {
        console.error(err);
        setPlayer("notfound");
      });
  }, []);

  /* AVATARS */
  const [avatarList, setAvatarList] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/collection/avatars/${
          player.id
        }`
      )
      .then((res) => {
        setAvatarList(res.data);
      })
      .catch((err) => console.error(err));
  }, [player]);
  if (player === "notfound") {
    return <p>Joueur non trouvable</p>;
  }
  return (
    <div className="profil mt-20">
      <div className="settings-wrapper">
        <div className="profil-header">
          <div className="avatar" />
          <div className="banner" />
        </div>
        <div
          className="settings-container"
          style={{ backgroundColor: primaryColor }}
        >
          <div className="settings-content mx-auto">
            <div className="exp-wrapper">
              <ExpBar />
              <p className="title">player.title</p>
            </div>
            <FavGames
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              textColor={textColor}
            />
            <Collection
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              textColor={textColor}
              avatarList={avatarList}
            />
            <Friends
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              textColor={textColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
