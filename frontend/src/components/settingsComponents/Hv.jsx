import PropTypes from "prop-types";
import coin from "../../assets/images/credit_1.png";

export default function Hv({ editmode, secondaryColor, textColor }) {
  return (
    <section className="profil-hv" style={{ backgroundColor: secondaryColor }}>
      <h1 style={{ color: textColor }}>PROPOSER DES ITEMS À L'ÉCHANGE</h1>
      <div className="profil-hv-content">
        {editmode && (
          <div className="hv-items">
            <div className="item">
              <button type="button"> + </button>
            </div>
            <div
              className="price
            "
            >
              <input type="number" />
              <img src={coin} alt="pièce" className="h-6" />
            </div>

            <button type="button" className="sell">
              METTRE EN VENTE
            </button>
          </div>
        )}
        ------items on sale------
      </div>
    </section>
  );
}
Hv.propTypes = {
  editmode: PropTypes.bool.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
