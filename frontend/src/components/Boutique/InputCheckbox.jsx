import PropTypes from "prop-types";

function InputCheckbox({ value, setLien, lien, text, reset }) {
  const handleFilter = (prev) => {
    if (!prev.includes(text)) {
      setLien([...prev, text]);
    } else {
      setLien(prev.filter((element) => element !== text));
    }
  };
  return (
    <div className="flex">
      <input
        type="checkbox"
        checked={value}
        className="w-6 bg-color-first bouton-boutique"
        onChange={() => {
          handleFilter(lien);
          reset((prev) => !prev);
        }}
      />
      <p className="pl-2">{text}</p>
    </div>
  );
}

InputCheckbox.propTypes = {
  value: PropTypes.bool.isRequired,
  setLien: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  lien: PropTypes.arrayOf(PropTypes.string).isRequired,
  reset: PropTypes.func.isRequired,
};

export default InputCheckbox;
