import { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "../components/Boutique/Searchbar";
import InputCheckbox from "../components/Boutique/InputCheckbox";
import BoutiqueComponent from "../components/Boutique/BoutiqueComponent";
import BuyValidate from "../components/Boutique/BuyValidate";
import "../styles/boutique.scss";

function Boutique() {
  const [bSurPlace, setBSurPlace] = useState(false);
  const [bOnline, setBOnline] = useState(false);
  const [common, setCommon] = useState(false);
  const [rare, setRare] = useState(false);
  const [epic, setEpic] = useState(false);
  const [legendary, setLegendary] = useState(false);
  const [hideAchieved, setHideAchieved] = useState(false);
  const [lien, setLien] = useState([]);
  const [liste, setListe] = useState([]);
  const [modalValidate, setModalValidate] = useState(false);
  const [avatarId, setAvatarId] = useState({});

  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/boutique/filter?rarity=${lien}`
      )
      .then((res) => {
        setListe(res.data);
      });
  }, [lien]);

  const filteredList = liste.filter((element) =>
    element.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="boutique-container border-b-2 h-[300px] border-black">
        <div className="boutique-landing h-[300px] -z-10 bg-black flex items-end justify-center absolute top-0 w-full">
          <p className="text-white text-8xl drop-shadow-xl">La boutique</p>
        </div>
      </div>
      <div className="boutique-main flex w-full">
        {modalValidate && (
          <div className="checkValidate z-[2] absolute w-full h-full bg-slate-400/75 flex items-start justify-center">
            <BuyValidate
              setModalValidate={setModalValidate}
              modalValidate={modalValidate}
              avatarId={avatarId}
            />
          </div>
        )}
        <div className="boutique-filtre bg-color-shop1 flex flex-col gap-2 pt-4 px-6 min-w-[240px]">
          <Searchbar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <div className="h-[1px] bg-black w-[80%] self-center " />
          <InputCheckbox
            className="filter"
            value={bSurPlace}
            setLien={setBSurPlace}
            text="Boutique sur place"
            reset={setBSurPlace}
            lien={lien}
          />
          <InputCheckbox
            className="filter"
            value={bOnline}
            setLien={setBOnline}
            text="Boutique en ligne"
            reset={setBOnline}
          />
          <div className="h-[1px] bg-black w-[80%] self-center" />
          <InputCheckbox
            value={common}
            setLien={setLien}
            text="Common"
            reset={setCommon}
            lien={lien}
          />
          <InputCheckbox
            value={rare}
            setLien={setLien}
            text="Rare"
            reset={setRare}
            lien={lien}
          />
          <InputCheckbox
            value={epic}
            setLien={setLien}
            text="Epic"
            reset={setEpic}
            lien={lien}
          />
          <InputCheckbox
            value={legendary}
            setLien={setLien}
            text="Legendary"
            reset={setLegendary}
            lien={lien}
          />
          <div className="h-[1px] bg-black w-[80%] self-center" />
          <InputCheckbox
            className="filter"
            value={hideAchieved}
            setLien={setHideAchieved}
            text="Cacher ceux possédés"
            reset={setHideAchieved}
            lien={lien}
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
              setLien(() => []);
            }}
          >
            Réinitialiser ({liste.length})
          </button>
        </div>
        <div className="boutique-liste bg-color-shop2 w-[90%] p-10 flex-wrap">
          <div className="item-container flex w-full flex-wrap gap-10 relative">
            {filteredList.map((item) => (
              <div key={item.image} className="flex flex-col item h-[280px]">
                <BoutiqueComponent
                  item={item}
                  setModalValidate={setModalValidate}
                  modalValidate={modalValidate}
                  setAvatarId={setAvatarId}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Boutique;
