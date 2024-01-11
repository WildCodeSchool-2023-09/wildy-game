import PropTypes from "prop-types";

export default function FavGames({ secondaryColor, textColor }) {
  return (
    <section className="fav-games" style={{ backgroundColor: secondaryColor }}>
      <h1 style={{ color: textColor }}>JEUX FAVORIS</h1>
      <div className="games-cards">------fav games------</div>
    </section>
  );
}
FavGames.propTypes = {
  secondaryColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
