import PropTypes from "prop-types";

export default function FavGames({ secondaryColor, textColor }) {
  return (
    <section className="fav-games" style={{ backgroundColor: secondaryColor }}>
      <h1 style={{ color: textColor }}>JEUX FAVORIS</h1>
      <div className="games-cards">
        <h2 style={{ color: textColor }}>
          Rendez-vous dans ta salle habituelle pour pouvoir ajouter tes jeux
          favoris et montrer tes meilleurs scores à tes amis !
        </h2>
      </div>
    </section>
  );
}
FavGames.propTypes = {
  secondaryColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
