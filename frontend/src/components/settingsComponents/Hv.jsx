import PropTypes from "prop-types";
import coin from "../../assets/images/credit_1.png";

export default function Hv({ editmode }) {
  return (
    <section className="profil-hv">
      <h1>PROPOSER DES ITEMS À L'ÉCHANGE</h1>
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
              <p>price</p>
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
};
