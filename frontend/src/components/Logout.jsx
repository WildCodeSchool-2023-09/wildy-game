import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { success } from "../services/toast";
import { useUser } from "../contexts/UserContext";
import piece from "../assets/images/credit_1.png";

function Logout({ user }) {
  const { setUser } = useUser();
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
    <div className="flex justify-center item-center gap-2">
      <div className="flex justify-center item-center">
        <p className="self-center">{user.credit}</p>
        <img src={piece} alt="piece" className="w-8 self-center" />
      </div>
      <div>
        <Link to="profil-settings">
          <p>{user.pseudo}</p>
        </Link>
        <button type="button" onClick={handleLogout}>
          Logout
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
