import axios from "axios";
import PropTypes from "prop-types";
import { success, failed } from "../../services/toast";

function PlayerComponent({ player }) {
  const deletePlayer = () => {
    axios
      .delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/players/${player.id}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          success("Joueur supprimé");
        }
      })
      .catch(() => {
        failed("Erreur lors de la suppression du joueur");
      });
  };
  return (
    <div className="admin-player">
      <p className="admin-case1">{player.id}</p>
      <p className="admin-case2">{player.firstname}</p>
      <p className="admin-case1">{player.lastname}</p>
      <p className="admin-case2 hover:overflow-x-auto">{player.email}</p>
      <p className="admin-case1">{player.pseudo}</p>
      <p className="admin-case2">{player.activeAvatar}</p>
      <p className="admin-case1">{player.banner ? player.banner : "Aucune"}</p>
      <p className="admin-case2">{player.credit}</p>
      <p className="admin-case1">{player.experience}</p>
      <p className="admin-case2">{player.isAdmin ? "Oui" : "Non"}</p>
      <p className="admin-case1">{player.lvl}</p>
      <p className="admin-case2">{player.membreId}</p>
      <p className="admin-case1">{player.profilTheme}</p>
      <p className="admin-case2">
        <button type="button" onClick={deletePlayer}>
          Supprimer?
        </button>
      </p>
    </div>
  );
}

PlayerComponent.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number,
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
    banner: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    activeAvatar: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([null]),
    ]),
  }).isRequired,
};

export default PlayerComponent;
