import PropTypes from "prop-types";
import up from "../assets/images/up.png";

export default function UpPage({ scrollToTop, isVisible }) {
  return (
    <div>
      {isVisible && (
        <button type="button" onClick={scrollToTop}>
          <div className="up-page">
            <p className="disabled">Up</p>
            <img src={up} alt="" />
          </div>
        </button>
      )}
    </div>
  );
}

UpPage.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
