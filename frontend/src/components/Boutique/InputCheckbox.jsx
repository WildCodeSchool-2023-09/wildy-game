import PropTypes from "prop-types";

function InputCheckbox({ value, setArrayFilter, arrayFilter, text, reset }) {
  const handleFilter = (prev) => {
    if (!prev.includes(text)) {
      setArrayFilter([...prev, text]);
    } else {
      setArrayFilter(prev.filter((element) => element !== text));
    }
  };
  return (
    <div className="flex">
      <input
        type="checkbox"
        checked={value}
        className="w-6 bg-color-first bouton-boutique"
        onChange={() => {
          handleFilter(arrayFilter);
          reset((prev) => !prev);
        }}
      />
      <p className="pl-2">{text}</p>
    </div>
  );
}

InputCheckbox.propTypes = {
  value: PropTypes.bool.isRequired,
  setArrayFilter: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  arrayFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
  reset: PropTypes.func.isRequired,
};

export default InputCheckbox;
