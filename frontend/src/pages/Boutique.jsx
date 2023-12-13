import { useState } from "react";
import Searchbar from "../components/Boutique/Searchbar";
import InputCheckbox from "../components/Boutique/InputCheckbox";
import "../styles/boutique.scss";

function Boutique() {
  const [bSurPlace, setBSurPlace] = useState(true);
  const [bOnline, setBOnline] = useState(false);
  const [figurine, setFigurine] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [titre, setTitre] = useState(false);
  const [peluche, setPeluche] = useState(false);
  const [hideAchieved, setHideAchieved] = useState(false);

  return (
    <>
      <div className="boutique-container border-b-2 h-[300px] border-black">
        <div className="boutique-landing h-[300px] -z-10 bg-black flex items-end justify-center absolute top-0 w-full">
          <p className="text-white text-8xl drop-shadow-xl">La boutique</p>
        </div>
      </div>
      <div className="boutique-main flex w-full">
        <div className="boutique-filtre bg-color-shop1 w-[15%] h-full flex flex-col gap-2 pt-4 px-6 min-w-[240px]">
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
        <div className="boutique-liste bg-color-shop2 w-[85%]">
          <p>{bSurPlace && bOnline && "Toutes les boutiques"}</p>
        </div>
      </div>
    </>
  );
}

export default Boutique;
