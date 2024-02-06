import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { success } from "../services/toast";
import { useUser } from "../contexts/UserContext";
import piece from "../assets/images/credit_1.png";
import "../styles/navbar.scss";

function Logout() {
  const { setUser, user } = useUser();
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/logout`,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      if (res.status === 200) {
        localStorage.removeItem("player");
        setUser(false);
        success(`Vous avez été déconnecté !`);
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="logout flex justify-center item-center gap-2">
      <div className="flex justify-center item-center gap-2">
        <p className="self-center">{user.credit}</p>
        <img src={piece} alt="piece" className="w-8 self-center" />
        <Link to="profil-settings">
          <p>{user.pseudo}</p>
        </Link>
        <button type="button" onClick={handleLogout}>
          <p className="hidden">logout</p>
          <svg
            version="1.1"
            id="svg2"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 1200 1200"
            enableBackground="new 0 0 1200 1200"
            className="w-6 h-6"
            style={{ fill: "white", filter: "drop-shadow(2px 2px 2px black)" }}
          >
            <path
              id="path14971"
              d="M513.94,0v693.97H686.06V0H513.94z M175.708,175.708
	C67.129,284.287,0,434.314,0,600c0,331.371,268.629,600,600,600s600-268.629,600-600c0-165.686-67.13-315.713-175.708-424.292
	l-120.85,120.85C981.102,374.216,1029.126,481.51,1029.126,600c0,236.981-192.146,429.126-429.126,429.126
	c-236.981,0-429.126-192.145-429.126-429.126c0-118.49,48.025-225.784,125.684-303.442L175.708,175.708z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
Logout.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    pseudo: PropTypes.string,
    email: PropTypes.string,
    experience: PropTypes.number,
    credit: PropTypes.number,
    membreId: PropTypes.string,
    profilTheme: PropTypes.number,
    lvl: PropTypes.number,
    isAdmin: PropTypes.number,
    banner: PropTypes.string,
  }).isRequired,
};

export default Logout;
