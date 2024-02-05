import PropTypes from "prop-types";
import { useState } from "react";

import tick from "../../assets/images/accept.svg";

export default function ProfilAvatars({
  avatarList,
  setAvatar,
  color,
  setColor,
}) {
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const borderSelected = "4px solid #699F4C";

  return (
    <>
      <div className="avatar-form">
        {avatarList.map((avatar) => (
          <div key={avatar.image} className="avatar-choice">
            <button
              type="button"
              onClick={() => {
                setSelectedAvatar(
                  `${import.meta.env.VITE_BACKEND_URL}/${avatar.image}`
                );
                setAvatar(avatar.id);
              }}
              style={
                selectedAvatar ===
                `${import.meta.env.VITE_BACKEND_URL}/${avatar.image}`
                  ? {
                      border: borderSelected,
                      transform: "scale(1.1)",
                    }
                  : { filter: "opacity(60%)", border: "4px solid transparent" }
              }
            >
              {selectedAvatar ===
                `${import.meta.env.VITE_BACKEND_URL}/${avatar.image}` && (
                <img src={tick} alt="" className="tick" />
              )}

              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${avatar.image}`}
                alt={avatar.name}
                className=" bg-[#989898] shadow-lg shadow-black"
                style={{ backgroundColor: color }}
              />
              <p className="hidden">Je suis un avatar</p>
            </button>
          </div>
        ))}
      </div>
      <div className="chose-color">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </>
  );
}

ProfilAvatars.propTypes = {
  avatarList: PropTypes.arrayOf.isRequired,
  setAvatar: PropTypes.func.isRequired,
  color: PropTypes.number.isRequired,
  setColor: PropTypes.func.isRequired,
};
