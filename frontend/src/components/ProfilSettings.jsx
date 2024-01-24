import { useState, useEffect } from "react";
import axios from "axios";
import ExpBar from "./ExpBar";

import FavGames from "./settingsComponents/FavGames";
import Collection from "./settingsComponents/Collection";
import Hv from "./settingsComponents/Hv";
import ProfilTheme from "./settingsComponents/ProfilTheme";
import Friends from "./settingsComponents/Friends";
import editPen from "../assets/images/editPen.png";
import ProfilAvatars from "./settingsComponents/ProfilAvatars";
import Upload from "../pages/Upload";
import close from "../assets/images/close.svg";

export default function ProfilSettings() {
  const [editmode, setEditmode] = useState(false);
  /* PROFIL THEME */
  const [primaryColor, setPrimaryColor] = useState("#ffffff");
  const [secondaryColor, setSecondaryColor] = useState("#b4b4b4");
  const [textColor, setTextColor] = useState("#ffffff");
  /* OPEN EDIT MODAL */
  const [modalAvatar, setModalAvatar] = useState(false);
  const [modalBanner, setModalBanner] = useState(false);
  const [redeem, setRedeem] = useState(false);
  const handleCloseEdit = () => {
    if (modalAvatar) {
      setModalAvatar(false);
    }
    if (modalBanner) {
      setModalBanner(false);
    }
  };

  /* AVATARS */
  const [avatarList, setAvatarList] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/collection=`)
      .then((res) => {
        setAvatarList(res.data);
      });
  }, []);
  return (
    <div className="settings-wrapper">
      <div className="profil-header">
        {editmode && (
          <button
            type="button"
            className="edit-avatar"
            onClick={() => setModalAvatar(true)}
          >
            <img src={editPen} alt="pen to edit" width={30} />
            <p className="hidden">edit</p>
          </button>
        )}
        <div className={`avatar ${editmode && "edit-mode-avatar"}`} />
        {editmode && (
          <button
            type="button"
            className="edit-banner"
            onClick={() => setModalBanner(true)}
          >
            <img src={editPen} alt="pen to edit" width={30} />
            <p className="hidden">edit</p>
          </button>
        )}
        <div className={`banner ${editmode && "edit-mode-banner"}`} />
      </div>
      <div
        className={`settings-container ${editmode && "justify-center"}`}
        style={{ backgroundColor: primaryColor }}
      >
        {editmode === false && (
          <aside className="settings-menu">
            <h1>Mon compte</h1>
            <h2>player.pseudo</h2>
            <h2>player.email</h2>
            <ul>
              <li>
                <button type="button" onClick={() => setRedeem(true)}>
                  Ajouter un code
                </button>
              </li>
              <li>À propos</li>
            </ul>
          </aside>
        )}
        <div className="settings-content">
          <div className="exp-wrapper">
            <ExpBar />
            <p className="title">player.title</p>
          </div>

          <button type="button" onClick={() => setEditmode(!editmode)}>
            {editmode ? "Valider" : "Personnaliser le profil"}
          </button>
          {editmode && (
            <ProfilTheme
              primaryColor={primaryColor}
              setPrimaryColor={setPrimaryColor}
              secondaryColor={secondaryColor}
              setSecondaryColor={setSecondaryColor}
              textColor={textColor}
              setTextColor={setTextColor}
            />
          )}
          <FavGames
            editmode={editmode}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
          <Collection
            editmode={editmode}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
          <Hv
            editmode={editmode}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
          <Friends
            editmode={editmode}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
        </div>
      </div>
      {modalAvatar && (
        <div className="modal-container">
          <div className="modal">
            <button
              type="button"
              className="close"
              onClick={() => handleCloseEdit()}
            >
              <img src={close} alt="close" width={30} />
            </button>
            <div className="avatar-form">
              {avatarList.map((avatar) => (
                <div
                  key={avatar.image}
                  className="flex flex-col item h-[280px]"
                >
                  <ProfilAvatars item={avatar} />
                </div>
              ))}
            </div>
            <div className="chose-color">
              <input type="color" />
            </div>
            <button
              type="button"
              className="confirm"
              onClick={() => handleCloseEdit()}
            >
              Confirmer
            </button>
          </div>
        </div>
      )}
      {modalBanner && (
        <div className="modal-container">
          <Upload handleCloseEdit={handleCloseEdit} />
        </div>
      )}
      {redeem && (
        <div className="modal-container">
          <div className="modal">
            <button
              type="button"
              className="close"
              onClick={() => setRedeem(false)}
            >
              <img src={close} alt="close" width={30} />
            </button>
            <form
              action="submit"
              className="redeem flex flex-col gap-8 justify-center items-center"
            >
              <label htmlFor="reedem">Ajouter un code</label>
              <input type="text" />
              <button
                className="confirm"
                type="submit"
                onClick={() => setRedeem(false)}
              >
                Confirmer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
