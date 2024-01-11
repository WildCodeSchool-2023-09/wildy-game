import PropTypes from "prop-types";

export default function Collection({ secondaryColor, textColor }) {
  return (
    <section className="collection" style={{ backgroundColor: secondaryColor }}>
      <h1 style={{ color: textColor }}>COLLECTION</h1>
      <div className="collection-content">------items------</div>
    </section>
  );
}

Collection.propTypes = {
  secondaryColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
