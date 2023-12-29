import PropTypes from "prop-types";
import piece from "../../assets/images/credit_1.png";

function BoutiqueComponent({ item }) {
  return (
    <>
      <img
        src={item.image}
        alt={item.name}
        className="w-60 h-60 bg-black shadow-lg shadow-black"
      />
      <div className="flex items-center justify-between mt-2">
        <p className="text-white">{item.name}</p>
        <div className="flex text-white">
          <p>{item.prix}</p>
          <img src={piece} alt="coin" className="h-6" />
        </div>
      </div>
    </>
  );
}

BoutiqueComponent.propTypes = {
  item: PropTypes.bool.isRequired,
};

export default BoutiqueComponent;
