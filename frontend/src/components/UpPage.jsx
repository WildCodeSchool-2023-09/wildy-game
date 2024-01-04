import PropTypes from "prop-types";
import up from "../assets/images/up.png";

export default function UpPage({ scrollToTop, isVisible }) {
  return (
    <div>
      {isVisible && (
        <button type="button" className="up-page" onClick={scrollToTop}>
          <p className="disabled">Up</p>
          <img src={up} alt="" />
        </button>
      )}
    </div>
  );
}

UpPage.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
