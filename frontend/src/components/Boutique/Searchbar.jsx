import PropTypes from "prop-types";
import loupe from "../../assets/images/LoupeBoutique.svg";

function Searchbar({ searchValue, setSearchValue }) {
  const handleChange = (e) => {
    setSearchValue(() => e.target.value);
  };
  return (
    <div className="flex items-center gap-4 font-play">
      <img src={loupe} alt="Searchbar icon" className="pt-2" />
      <input
        type="search"
        className="rounded-2xl h-[25px] px-4 shadow-md bg-color-first text-white w-full"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}

Searchbar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default Searchbar;
