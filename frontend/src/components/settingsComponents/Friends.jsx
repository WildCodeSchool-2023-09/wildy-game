import PropTypes from "prop-types";

export default function Friends({ secondaryColor, textColor }) {
  return (
    <section className="friends" style={{ backgroundColor: secondaryColor }}>
      <h1 style={{ color: textColor }}>AMIS</h1>
      <div className="friends-content">------friends------</div>
    </section>
  );
}
Friends.propTypes = {
  secondaryColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
