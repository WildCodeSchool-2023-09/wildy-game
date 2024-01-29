/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from "prop-types";
import { useUser } from "../../contexts/UserContext";

export default function ProfilTheme({
  secondaryColor,
  textColor,
  handleTheme,
  handleUserContextTheme,
}) {
  const { user, setUser } = useUser();

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
            setUser({ ...user, profilTheme: 1 });
          }}
        />
        <button
          type="button"
          className="theme2-green-picker"
          onClick={() => {
            handleTheme("#415D43", "#709775", "#000000");
            setUser({ ...user, profilTheme: 2 });
          }}
        />
        <button
          type="button"
          className="theme3-blue-picker"
          onClick={() => {
            handleTheme("#011936", "#465362", "#ffffff");
            setUser({ ...user, profilTheme: 3 });
          }}
        />
        <button
          type="button"
          className="theme4-purple-picker"
          onClick={() => {
            handleTheme("#3D2579", "#F36D84", "#ffffff");
            handleUserContextTheme();
            setUser({ ...user, profilTheme: 4 });
          }}
        />
        <button
          type="button"
          className="theme5-pink-picker"
          onClick={() => {
            handleTheme("#D496A7", "#F1DEDE", "#000000");
            handleUserContextTheme();
            setUser({ ...user, profilTheme: 5 });
          }}
        />
        <button
          type="button"
          className="theme6-red-picker"
          onClick={() => {
            handleTheme("#9A031E", "#f9c80e", "#000000");
            setUser({ ...user, profilTheme: 6 });
            handleUserContextTheme();
          }}
        />
        <button
          type="button"
          className="reset"
          onClick={() => {
            handleTheme("#ffffff", "#b4b4b4", "#ffffff");
            setUser({ ...user, profilTheme: 0 });
            handleUserContextTheme();
          }}
        >
          Défault
        </button>
      </div>
    </section>
  );
}
ProfilTheme.propTypes = {
  handleTheme: PropTypes.func.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  handleUserContextTheme: PropTypes.func.isRequired,
};
