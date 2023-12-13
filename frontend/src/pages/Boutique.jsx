import Searchbar from "../components/Boutique/Searchbar";
import "../styles/boutique.scss";

function Boutique() {
  return (
    <>
      <div className="boutique-container border-b-2 h-[250px] border-black">
        <div className="boutique-landing h-[300px] -z-10 bg-black flex items-end justify-center absolute top-0 w-full">
          <p className="text-white text-8xl drop-shadow-xl">La boutique</p>
        </div>
      </div>
      <div className="boutique-main flex w-full">
        <div className="boutique-filtre bg-color-shop1 w-[15%] h-full flex flex-col items-center gap-2 pt-4 px-6">
          <Searchbar />
          <div className="h-[1px] bg-black w-[80%]" />
        </div>
        <div className="boutique-liste bg-color-shop2 w-[85%]">
          <p>Item 1</p>
          <p>Item 1</p>
          <p>Item 1</p>
          <p>Item 1</p>
          <p>Item 1</p>
        </div>
      </div>
    </>
  );
}

export default Boutique;
