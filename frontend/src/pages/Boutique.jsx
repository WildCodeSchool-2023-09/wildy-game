import { useState } from "react";
import Searchbar from "../components/Boutique/Searchbar";
import InputCheckbox from "../components/Boutique/InputCheckbox";
import BoutiqueComponent from "../components/Boutique/BoutiqueComponent";
import "../styles/boutique.scss";

function Boutique() {
  const [bSurPlace, setBSurPlace] = useState(false);
  const [bOnline, setBOnline] = useState(false);
  const [common, setCommon] = useState(false);
  const [rare, setRare] = useState(false);
  const [epic, setEpic] = useState(false);
  const [legendary, setLegendary] = useState(false);
  const [hideAchieved, setHideAchieved] = useState(false);
  const [arrayFilter, setArrayFilter] = useState([]);

  const listeFictive = [
    {
      name: "Blabla",
      rarity: "Common",
      path: "/Boutique/ImageRandom1.png",
      price: 500,
      owned: true,
    },
    {
      name: "ABCD",
      rarity: "Rare",
      path: "/Boutique/ImageRandom2.png",
      price: 2200,
    },
    {
      name: "Bloodborne",
      rarity: "Common",
      path: "/Boutique/ImageRandom3.png",
      price: 10,
    },
    {
      name: "Goat",
      rarity: "Epic",
      path: "/Boutique/ImageRandom4.png",
      price: 1500,
    },
    {
      name: "Plusd'inspi",
      rarity: "Legendary",
      path: "/Boutique/ImageRandom5.png",
      price: 300,
    },
    {
      name: "Blabla",
      rarity: "Common",
      path: "/Boutique/ImageRandom1.png",
      price: 500,
    },
    {
      name: "ABCD",
      rarity: "Rare",
      path: "/Boutique/ImageRandom2.png",
      price: 2200,
    },
    {
      name: "Bloodborne",
      rarity: "Common",
      path: "/Boutique/ImageRandom3.png",
      price: 10,
    },
    {
      name: "Goat",
      rarity: "Epic",
      path: "/Boutique/ImageRandom4.png",
      price: 1500,
    },
    {
      name: "Plusd'inspi",
      rarity: "Legendary",
      path: "/Boutique/ImageRandom5.png",
      price: 300,
    },
    {
      name: "Blabla",
      rarity: "Common",
      path: "/Boutique/ImageRandom1.png",
      price: 500,
    },
    {
      name: "ABCD",
      rarity: "Rare",
      path: "/Boutique/ImageRandom2.png",
      price: 2200,
    },
    {
      name: "Bloodborne",
      rarity: "Common",
      path: "/Boutique/ImageRandom3.png",
      price: 10,
    },
    {
      name: "Goat",
      rarity: "Epic",
      path: "/Boutique/ImageRandom4.png",
      price: 1500,
    },
    {
      name: "Plusd'inspi",
      rarity: "Legendary",
      path: "/Boutique/ImageRandom5.png",
      price: 300,
    },
    {
      name: "Blabla",
      rarity: "Common",
      path: "/Boutique/ImageRandom1.png",
      price: 500,
    },
    {
      name: "ABCD",
      rarity: "Rare",
      path: "/Boutique/ImageRandom2.png",
      price: 2200,
    },
    {
      name: "Bloodborne",
      rarity: "Common",
      path: "/Boutique/ImageRandom3.png",
      price: 10,
    },
    {
      name: "Goat",
      rarity: "Epic",
      path: "/Boutique/ImageRandom4.png",
      price: 1500,
    },
    {
      name: "Plusd'inspi",
      rarity: "Legendary",
      path: "/Boutique/ImageRandom5.png",
      price: 300,
    },
    {
      name: "Blabla",
      rarity: "Common",
      path: "/Boutique/ImageRandom1.png",
      price: 500,
    },
    {
      name: "ABCD",
      rarity: "Rare",
      path: "/Boutique/ImageRandom2.png",
      price: 2200,
    },
    {
      name: "Bloodborne",
      rarity: "Common",
      path: "/Boutique/ImageRandom3.png",
      price: 10,
    },
    {
      name: "Goat",
      rarity: "Epic",
      path: "/Boutique/ImageRandom4.png",
      price: 1500,
    },
    {
      name: "Plusd'inspi",
      rarity: "Legendary",
      path: "/Boutique/ImageRandom5.png",
      price: 300,
    },
  ];

  const [searchValue, setSearchValue] = useState("");

  const filteredList = listeFictive
    .filter((element) =>
      element.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((item) => {
      if (arrayFilter.length === 0) {
        return true;
      }
      return arrayFilter.some(
        (selectedRarity) => item.rarity === selectedRarity
      );
    });

  return (
    <>
      <div className="boutique-container border-b-2 h-[300px] border-black">
        <div className="boutique-landing h-[300px] -z-10 bg-black flex items-end justify-center absolute top-0 w-full">
          <p className="text-white text-8xl drop-shadow-xl">La boutique</p>
        </div>
      </div>
      <div className="boutique-main flex w-full">
        <div className="boutique-filtre bg-color-shop1 flex flex-col gap-2 pt-4 px-6 min-w-[240px]">
          <Searchbar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <div className="h-[1px] bg-black w-[80%] self-center " />
          <InputCheckbox
            className="filter"
            value={bSurPlace}
            setArrayFilter={setBSurPlace}
            text="Boutique sur place"
            reset={setBSurPlace}
          />
          <InputCheckbox
            className="filter"
            value={bOnline}
            setArrayFilter={setBOnline}
            text="Boutique en ligne"
          />
          <div className="h-[1px] bg-black w-[80%] self-center" />
          <InputCheckbox
            value={common}
            setArrayFilter={setArrayFilter}
            text="Common"
            reset={setCommon}
            arrayFilter={arrayFilter}
          />
          <InputCheckbox
            value={rare}
            setArrayFilter={setArrayFilter}
            text="Rare"
            reset={setRare}
            arrayFilter={arrayFilter}
          />
          <InputCheckbox
            value={epic}
            setArrayFilter={setArrayFilter}
            text="Epic"
            reset={setEpic}
            arrayFilter={arrayFilter}
          />
          <InputCheckbox
            value={legendary}
            setArrayFilter={setArrayFilter}
            text="Legendary"
            reset={setLegendary}
            arrayFilter={arrayFilter}
          />
          <div className="h-[1px] bg-black w-[80%] self-center" />
          <InputCheckbox
            className="filter"
            value={hideAchieved}
            setArrayFilter={setHideAchieved}
            text="Cacher ceux possédés"
            reset={setHideAchieved}
          />
          <div className="h-[1px] bg-black w-[80%] self-center" />
          <button
            type="button"
            className="bg-color-second shadow-lg h-8 mt-2"
            onClick={() => {
              setBSurPlace(false);
              setBOnline(false);
              setCommon(false);
              setRare(false);
              setEpic(false);
              setLegendary(false);
              setHideAchieved(false);
              setArrayFilter(() => []);
            }}
          >
            Réinitialiser
          </button>
        </div>
        <div className="boutique-liste bg-color-shop2 w-[90%] p-10 flex-wrap">
          <div className="item-container flex w-full flex-wrap gap-10">
            {filteredList.map((item) => (
              <div className="flex flex-col item h-[280px]">
                <BoutiqueComponent item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Boutique;
