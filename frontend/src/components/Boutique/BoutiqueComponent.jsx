import PropTypes from "prop-types";
import piece from "../../assets/images/credit_1.png";
import cart from "../../assets/images/cart.svg";
import handleScrollToTop from "../../services/scroll";

function BoutiqueComponent({
  item,
  setModalValidate,
  modalValidate,
  setAvatarId,
}) {
  return (
    <>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/${item.image}`}
        alt={item.name}
        className="w-60 h-60 bg-[#989898] shadow-lg shadow-black"
      />
      <div className="flex items-center justify-between mt-2">
        <p className="text-white">{item.name}</p>
        <div className="flex text-white">
          <p>{item.prix}</p>
          <img src={piece} alt="coin" className="h-6" />
          <button
            type="button"
            onClick={() => {
              setModalValidate(!modalValidate);
              setAvatarId(item.id);
              handleScrollToTop();
            }}
          >
            <img src={cart} alt="cart" className="h-6" />
          </button>
        </div>
      </div>
    </>
  );
}

BoutiqueComponent.propTypes = {
  item: PropTypes.bool.isRequired,
  setModalValidate: PropTypes.func.isRequired,
  modalValidate: PropTypes.bool.isRequired,
  setAvatarId: PropTypes.func.isRequired,
};

export default BoutiqueComponent;
