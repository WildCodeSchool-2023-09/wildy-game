import { useState } from "react";
import Searchbar from "../components/Boutique/Searchbar";
import InputCheckbox from "../components/Boutique/InputCheckbox";
import BoutiqueComponent from "../components/Boutique/BoutiqueComponent";
import "../styles/boutique.scss";

function Boutique() {
  const [bSurPlace, setBSurPlace] = useState(false);
  const [bOnline, setBOnline] = useState(false);
  const [figurine, setFigurine] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [titre, setTitre] = useState(false);
  const [peluche, setPeluche] = useState(false);
  const [hideAchieved, setHideAchieved] = useState(false);

  const [listeFictive, setListeFictive] = useState([
    {
      name: "Blabla",
      rarity: "Commun",
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
      rarity: "Commun",
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
      rarity: "Commun",
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
      rarity: "Commun",
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
      rarity: "Commun",
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
      rarity: "Commun",
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
      rarity: "Commun",
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
      rarity: "Commun",
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
      rarity: "Commun",
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
      rarity: "Commun",
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
  ]);
  console.info(setListeFictive);

  return (
    <>
      <div className="boutique-container border-b-2 h-[300px] border-black">
        <div className="boutique-landing h-[300px] -z-10 bg-black flex items-end justify-center absolute top-0 w-full">
          <p className="text-white text-8xl drop-shadow-xl">La boutique</p>
        </div>
      </div>
      <div className="boutique-main flex w-full">
        <div className="flex-1 boutique-filtre bg-color-shop1 w-[15%] flex flex-col gap-2 pt-4 px-6 min-w-[240px]">
          <Searchbar />
          <div className="h-[1px] bg-black w-[80%] self-center" />
          <InputCheckbox
            value={bSurPlace}
            setter={setBSurPlace}
            text="Boutique sur place"
          />
          <InputCheckbox
            value={bOnline}
            setter={setBOnline}
            text="Boutique en ligne"
          />
          <div className="h-[1px] bg-black w-[80%] self-center" />
          <InputCheckbox
            value={figurine}
            setter={setFigurine}
            text="Figurine"
          />
          <InputCheckbox value={avatar} setter={setAvatar} text="Avatar" />
          <InputCheckbox value={titre} setter={setTitre} text="Titre" />
          <InputCheckbox value={peluche} setter={setPeluche} text="Peluche" />
          <div className="h-[1px] bg-black w-[80%] self-center" />
          <InputCheckbox
            value={hideAchieved}
            setter={setHideAchieved}
            text="Cacher ceux possédés"
          />
          <div className="h-[1px] bg-black w-[80%] self-center" />
          <button
            type="button"
            className="bg-color-second shadow-lg h-8 mt-2"
            onClick={() => {
              setBSurPlace(false);
              setBOnline(false);
              setFigurine(false);
              setAvatar(false);
              setTitre(false);
              setPeluche(false);
              setHideAchieved(false);
            }}
          >
            Réinitialiser
          </button>
        </div>
        <div className="boutique-liste bg-color-shop2 w-[85%] flex gap-10 p-10 flex-wrap">
          {listeFictive.map((item) => (
            <div className="flex flex-col">
              <BoutiqueComponent item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Boutique;
