import PropTypes from "prop-types";

export default function Collection({
  secondaryColor,
  textColor,
  primaryColor,
  avatarList,
}) {
  return (
    <section className="collection" style={{ backgroundColor: secondaryColor }}>
      <div className="collection-header">
        <h1 style={{ color: textColor }}>COLLECTION</h1>
        <div className="rarities">
          {" "}
          <h3 style={{ color: textColor }}>Rareté </h3>
          <div className="rarities-container">
            <div className="rarity common">
              <p>COMMON</p>
            </div>
            <div className="rarity rare">
              <p>RARE</p>
            </div>
            <div className="rarity epic">
              <p>EPIC</p>
            </div>
            <div className="rarity legendary">
              <p>LEGEND</p>
            </div>
          </div>
        </div>
      </div>
      <div className="collection-container">
        {avatarList.map((avatar) => {
          let borderColor;
          switch (avatar.rarity) {
            case "Common":
              borderColor = "#FFFFFF"; // black for common
              break;
            case "Rare":
              borderColor = "#689be7"; // blue for rare
              break;
            case "Epic":
              borderColor = "#b131d6"; // magenta for epic
              break;
            case "Legendary":
              borderColor = "#fc9307"; // yellow for legendary
              break;
            default:
              borderColor = undefined; // no border for other cases
          }

          return (
            <div className="avatar-container">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${avatar.image}`}
                alt="avatar"
                className="w-40"
                style={{
                  backgroundColor: primaryColor,
                  border: borderColor ? `1px solid ${borderColor}` : undefined,
                  boxShadow: `-2px -2px 20px 2px ${borderColor}, 2px 2px 20px 2px ${borderColor}`,
                }}
              />
              <h3 style={{ color: textColor }}>{avatar.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

Collection.propTypes = {
  secondaryColor: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  avatarList: PropTypes.arrayOf.isRequired,
};
