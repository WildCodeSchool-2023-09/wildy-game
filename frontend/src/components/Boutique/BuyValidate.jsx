import axios from "axios";
import PropTypes from "prop-types";
import { useUser } from "../../contexts/UserContext";
import { failed, success } from "../../services/toast";

function BuyValidate({ setModalValidate, modalValidate, avatarId }) {
  const { user } = useUser();
  const handleBuyAvatar = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/boutique/avatar/${user.id}`,
        { avatarId }
      );
      if (res.status === 200) {
        success("Avatar acheté avec succès !");
        setModalValidate(!modalValidate);
      }
    } catch (error) {
      failed(error.response.data.error);
    }
  };
  return (
    <div className="buyValidate w-[300px] h-[150px] flex flex-col items-center justify-center bg-color-second gap-4">
      <h3 className="text-center">Êtes vous sur d'acheter cet avatar?</h3>
      <div className="buyValidatebtn flex gap-10">
        <button
          type="button"
          className="btnAnnuler"
          onClick={() => setModalValidate(!modalValidate)}
        >
          Annuler
        </button>
        <button type="button" className="btnAcheter" onClick={handleBuyAvatar}>
          Acheter
        </button>
      </div>
    </div>
  );
}
BuyValidate.propTypes = {
  setModalValidate: PropTypes.func.isRequired,
  modalValidate: PropTypes.bool.isRequired,
  avatarId: PropTypes.number.isRequired,
};
export default BuyValidate;
