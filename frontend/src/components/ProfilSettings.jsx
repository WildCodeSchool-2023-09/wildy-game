/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useUser } from "../contexts/UserContext";
import ExpBar from "./ExpBar";
import { success, failed } from "../services/toast";

import FavGames from "./settingsComponents/FavGames";
import Collection from "./settingsComponents/Collection";
import Hv from "./settingsComponents/Hv";
import ProfilTheme from "./settingsComponents/ProfilTheme";
import Friends from "./settingsComponents/Friends";
import editPen from "../assets/images/editPen.png";
import ProfilAvatars from "./settingsComponents/ProfilAvatars";
import Upload from "../pages/Upload";
import close from "../assets/images/close.svg";
import robot from "../assets/images/robot.png";

export default function ProfilSettings() {
  const { user, setUser, refreshUser } = useUser();
  const [redeemBody, setRedeemBody] = useState({
    code: "",
    id: 0,
  });
  const [editmode, setEditmode] = useState(false);

  /* OPEN EDIT MODAL */
  const [modalAvatar, setModalAvatar] = useState(false);
  const [modalBanner, setModalBanner] = useState(false);
  const [redeem, setRedeem] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [avatar, setAvatar] = useState({});
  const [avatarImage, setavatarImage] = useState("");
  /* CLOSE MODAL */

  const handleCloseEdit = () => {
    if (modalAvatar) {
      setModalAvatar(false);
    }
    if (modalBanner) {
      setModalBanner(false);
    }
  };

  const closeOnEscapeKeyDown = useCallback((e) => {
    if (
      e.charCode === 27 ||
      e.keyCode === 27 ||
      e.charCode === 53 ||
      e.keyCode === 53
    ) {
      setModalBanner(false);
      setModalAvatar(false);
    }
  }, []);
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  /* GET AVATAR */
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/players/avatar/${user.id}`)
      .then((res) => {
        setavatarImage(res.data[0].image);
      })
      .catch((err) => console.error(err));
  }, [user.activeAvatar]);

  const handleAvatarChange = async () => {
    const avatarObject = { avatarId: avatar };
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/players/avatar/${user.id}`,
        avatarObject,
        { withCredentials: true }
      );
      if (res.status === 200) {
        success(`Avatar modifié avec succès !`);
        setUser({ ...user, activeAvatar: avatar });
      }
    } catch (error) {
      failed(error.response.data.error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
  };

  const handleRedeem = async (event) => {
    event.preventDefault();
    const updatedRedeemBody = { ...redeemBody, code: inputValue, id: user.id };
    setRedeemBody(updatedRedeemBody);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/players/addcredit`,
        updatedRedeemBody,
        { withCredentials: true }
      );

      if (res.status === 201) {
        success(`Code utilisé avec succes +${res.data.gain} !`);
        refreshUser();
      }
    } catch (error) {
      failed(error.response.data.error);
    }
  };

  /* AVATARS */
  const [avatarList, setAvatarList] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/collection/avatars/${user.id}`
      )
      .then((res) => {
        setAvatarList(res.data);
      })
      .catch((err) => console.error(err));
  }, [user]);

  /* PROFIL THEME */
  const [primaryColor, setPrimaryColor] = useState("#ffffff");
  const [secondaryColor, setSecondaryColor] = useState("#b4b4b4");
  const [textColor, setTextColor] = useState("#ffffff");

  /* THEME */

  const handleUserTheme = async () => {
    const updateTheme = { profilTheme: user.profilTheme };
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/players/${user.id}/addtheme`,
        updateTheme,
        { withCredentials: true }
      );
    } catch (error) {
      failed(error.response.data.error);
    }
  };

  const handleTheme = (primary, secondary, text) => {
    setPrimaryColor(primary);
    setSecondaryColor(secondary);
    setTextColor(text);
  };

  const handleUserContextTheme = () => {
    switch (user.profilTheme) {
      case 0:
        handleTheme("#ffffff", "#b4b4b4", "#ffffff");
        break;
      case 1:
        handleTheme("#000000", "#3d3d3d", "#ffffff");
        break;
      case 2:
        handleTheme("#415D43", "#709775", "#000000");
        break;
      case 3:
        handleTheme("#011936", "#465362", "#ffffff");
        break;
      case 4:
        handleTheme("#3D2579", "#F36D84", "#ffffff");
        break;
      case 5:
        handleTheme("#D496A7", "#F1DEDE", "#000000");
        break;
      case 6:
        handleTheme("#9A031E", "#f9c80e", "#000000");
        break;
      default:
        handleTheme("#ffffff", "#b4b4b4", "#ffffff");
    }
  };
  /* LOAD THE RIGTH THEME */

  useEffect(() => {
    handleUserContextTheme();
  }, [user.profilTheme]);

  /* COLOR WHEEL */

  const [color, setColor] = useState(user.avatarColor);
  console.info(user.avatarColor);

  const handleAvatarColor = async () => {
    const updateColor = { avatarColor: color };
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/players/${
          user.id
        }/updtavatarcolor`,
        updateColor,
        { withCredentials: true }
      );
      if (res.status === 200) {
        success("Couleur d'avatar modifiée avec succès !");
      }
    } catch (error) {
      failed(error);
    }
  };
  useEffect(() => {
    setColor(user.avatarColor);
  }, [user.avatarColor]);

  return (
    <div className="settings-wrapper">
      <div className="profil-header">
        <div className="avatar-container" style={{ backgroundColor: color }}>
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
          <img
            src={
              avatarImage
                ? `${import.meta.env.VITE_BACKEND_URL}/${avatarImage}`
                : robot
            }
            className={`avatar ${editmode && "edit-mode-avatar"}`}
            alt="avatar"
          />
        </div>
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
        <img
          className={`banner ${editmode && "edit-mode-banner"}`}
          src={
            user.banner && `${import.meta.env.VITE_BACKEND_URL}/${user.banner}`
          }
          alt="banner"
        />
      </div>
      <div
        className={`settings-container ${editmode && "justify-center"}`}
        style={{ backgroundColor: primaryColor }}
      >
        {editmode === false && (
          <aside className="settings-menu">
            <h1>Mon compte</h1>
            <h2>{user.pseudo}</h2>
            <h2>{user.email}</h2>
            <ul>
              <li>
                <button
                  type="button"
                  onClick={() => setRedeem(true)}
                  className="font-bold"
                >
                  Ajouter un code
                </button>
              </li>
            </ul>
          </aside>
        )}
        <div className="settings-content">
          <div className="exp-wrapper">
            <ExpBar />
            <p className="title">player.title</p>
          </div>
          {editmode ? (
            <button
              type="button"
              onClick={() => {
                setEditmode(!editmode);
                handleUserTheme();
              }}
            >
              Valider
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setEditmode(!editmode);
              }}
            >
              Personnaliser le profil
            </button>
          )}

          {editmode && (
            <ProfilTheme
              primaryColor={primaryColor}
              setPrimaryColor={setPrimaryColor}
              secondaryColor={secondaryColor}
              setSecondaryColor={setSecondaryColor}
              textColor={textColor}
              setTextColor={setTextColor}
              handleTheme={handleTheme}
              handleUserContextTheme={handleUserContextTheme}
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
            avatarList={avatarList}
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

            <ProfilAvatars
              avatarList={avatarList}
              setAvatar={setAvatar}
              color={color}
              setColor={setColor}
            />

            <button
              type="button"
              className="confirm"
              onClick={() => {
                handleCloseEdit();
                handleAvatarChange();
                handleAvatarColor();
              }}
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
              className="redeem flex flex-col gap-8 justify-center items-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="reedem">Ajouter un code</label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="text-center text-xl font-montserrat font-bold"
              />
              <button
                className="confirm"
                type="button"
                onClick={(e) => {
                  handleRedeem(e);
                }}
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
