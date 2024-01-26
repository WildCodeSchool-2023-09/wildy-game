/* eslint-disable jsx-a11y/control-has-associated-label */

import PropTypes from "prop-types";

export default function ProfilTheme({
  setPrimaryColor,
  secondaryColor,
  setSecondaryColor,
  textColor,
  setTextColor,
  setUserTheme,
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
          className="theme1-black-picker"
          onClick={() => {
            handleTheme("#000000", "#3d3d3d", "#ffffff");

            setUserTheme(1);
          }}
        />
        <button
          type="button"
          className="theme2-green-picker"
          onClick={() => {
            handleTheme("#415D43", "#709775", "#000000");

            setUserTheme(2);
          }}
        />
        <button
          type="button"
          className="theme3-blue-picker"
          onClick={() => {
            handleTheme("#011936", "#465362", "#ffffff");
            setUserTheme(3);
          }}
        />
        <button
          type="button"
          className="theme4-purple-picker"
          onClick={() => {
            handleTheme("#3D2579", "#F36D84", "#ffffff");

            setUserTheme(4);
          }}
        />
        <button
          type="button"
          className="theme5-pink-picker"
          onClick={() => {
            handleTheme("#D496A7", "#F1DEDE", "#000000");

            setUserTheme(5);
          }}
        />
        <button
          type="button"
          className="theme6-red-picker"
          onClick={() => {
            handleTheme("#9A031E", "#f9c80e", "#000000");
            setUserTheme(6);
          }}
        />
        <button
          type="button"
          className="reset"
          onClick={() => {
            handleTheme("#ffffff", "#b4b4b4", "#ffffff");
            setUserTheme(0);
          }}
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
  setUserTheme: PropTypes.func.isRequired,
};
