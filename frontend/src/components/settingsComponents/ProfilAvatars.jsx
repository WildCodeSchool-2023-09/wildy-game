import PropTypes from "prop-types";

export default function ProfilAvatars({ avatar }) {
  return (
    <img
      src={`${import.meta.env.VITE_BACKEND_URL}/${avatar.image}`}
      alt={avatar.name}
      className="w-60 h-60 bg-[#989898] shadow-lg shadow-black"
    />
  );
}

ProfilAvatars.propTypes = {
  avatar: PropTypes.bool.isRequired,
};
