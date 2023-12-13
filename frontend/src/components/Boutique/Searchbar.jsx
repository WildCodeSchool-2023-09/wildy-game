import loupe from "../../assets/images/LoupeBoutique.svg";

function Searchbar() {
  return (
    <div className="flex items-center gap-4">
      <img src={loupe} alt="Searchbar icon" className="pt-2" />
      <input
        type="search"
        className="rounded-2xl h-[25px] px-4 shadow-md bg-color-first text-white w-full"
      />
    </div>
  );
}

export default Searchbar;
