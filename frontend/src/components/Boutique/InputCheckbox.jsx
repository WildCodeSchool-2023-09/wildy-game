import PropTypes from "prop-types";

function InputCheckbox({ value, setter, text }) {
  return (
    <div className="flex">
      <input
        type="checkbox"
        value={value}
        className="w-6 bg-color-first"
        onChange={() => setter((prev) => !prev)}
      />
      <p className="pl-2">{text}</p>
    </div>
  );
}

InputCheckbox.propTypes = {
  value: PropTypes.bool.isRequired,
  setter: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default InputCheckbox;
