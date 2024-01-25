import PropTypes from "prop-types";
import { useState } from "react";

import tick from "../../assets/images/accept.svg";

export default function ProfilAvatars({ avatarList }) {
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const borderSelected = "4px solid #699F4C";
  return (
    <>
      {avatarList.map((avatar) => (
        <div key={avatar.image} className="avatar-choice">
          <button
            type="button"
            onClick={() =>
              setSelectedAvatar(
                `${import.meta.env.VITE_BACKEND_URL}/${avatar.image}`
              )
            }
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
            />
            <p className="hidden">Je suis un avatar</p>
          </button>
        </div>
      ))}
    </>
  );
}

ProfilAvatars.propTypes = {
  avatarList: PropTypes.arrayOf.isRequired,
};
