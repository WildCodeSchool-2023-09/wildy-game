import axios from "axios";
import { useEffect, useState } from "react";
import { success, failed } from "../../services/toast";

function BonManagement() {
  const [bonListe, setBonListe] = useState([]);
  const [bonMontant, setBonMontant] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/bons`, {
        withCredentials: true,
      })
      .then((res) => {
        setBonListe(res.data);
      });
  }, [refresh]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/addcode`,
        { credit: bonMontant },
        { withCredentials: true }
      )
      .then(() => {
        success("Code ajouté");
        setRefresh(!refresh);
      })
      .catch((err) => failed(err.response.data.error));
  };
  return (
    <div>
      <p className="text-2xl text-center font-mont font-bold mb-2">
        Pour ajouter un bon, veuillez simplement préciser son montant:
      </p>
      <form className="flex justify-center">
        <input
          type="number"
          value={bonMontant}
          className="font-mont px-2 text-lg"
          required
          onChange={(e) => setBonMontant(e.target.value)}
        />
        <button
          type="submit"
          className=" ml-2 px-2 py-1 bg-white hover:bg-slate-200 transition-colors"
          onClick={handleSubmit}
        >
          Valider
        </button>
      </form>
      <div className="mt-4 flex flex-col items-center">
        <div className="admin-bon">
          <p className="admin-case1 bg-gray-600 text-white">ID</p>
          <p className="admin-case2 bg-gray-600 text-white">CODE</p>
          <p className="admin-case1 bg-gray-600 text-white">GAIN EN CREDIT</p>
          <p className="admin-case2 bg-gray-600 text-white">Supprimer</p>
        </div>
        {bonListe.map((element) => (
          <div key={element.id} className="admin-bon text-xl">
            <p className="font-mont font-semibold admin-case1">{element.id}</p>
            <p className="font-mont font-semibold admin-case2">
              {element.code}
            </p>
            <p className="font-mont font-semibold admin-case1">
              {element.gain_credit}
            </p>
            <div className="admin-case2 flex justify-center">
              <button type="button">Supprimer?</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BonManagement;
