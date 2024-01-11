/* eslint-disable jsx-a11y/control-has-associated-label */

import PropTypes from "prop-types";

export default function ProfilTheme({
  setPrimaryColor,
  secondaryColor,
  setSecondaryColor,
  textColor,
  setTextColor,
}) {
  const handleTheme = (primary, secondary, text) => {
    setPrimaryColor(primary);
    setSecondaryColor(secondary);
    setTextColor(text);
  };

  return (
    <section
      className="profil-theme"
      style={{ backgroundColor: secondaryColor }}
    >
      <h1 style={{ color: textColor }}>CHOISIR UN THEME</h1>
      <div className="theme-select">
        <button
          type="button"
          className="theme2-picker"
          onClick={() => handleTheme("#000000", "#3d3d3d", "#ffffff")}
        />
        <button
          type="button"
          className="theme5-picker"
          onClick={() => handleTheme("#415D43", "#709775", "#000000")}
        />
        <button
          type="button"
          className="theme4-picker"
          onClick={() => handleTheme("#011936", "#465362", "#ffffff")}
        />
        <button
          type="button"
          className="theme1-picker"
          onClick={() => handleTheme("#3D2579", "#F36D84", "#ffffff")}
        />
        <button
          type="button"
          className="theme3-picker"
          onClick={() => handleTheme("#D496A7", "#F1DEDE", "#ffffff")}
        />
        <button
          type="button"
          className="theme6-picker"
          onClick={() => handleTheme("#9A031E", "#f9c80e", "#000000")}
        />
        <button
          type="button"
          className="reset"
          onClick={() => handleTheme("#ffffff", "#b4b4b4", "#ffffff")}
        >
          Défault
        </button>
      </div>
    </section>
  );
}
ProfilTheme.propTypes = {
  setPrimaryColor: PropTypes.func.isRequired,
  setSecondaryColor: PropTypes.func.isRequired,
  setTextColor: PropTypes.func.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
