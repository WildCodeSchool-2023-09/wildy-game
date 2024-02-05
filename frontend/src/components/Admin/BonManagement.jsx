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

  const handleSubmit = () => {
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
      <p className="text-2xl">
        Pour ajouter un bon, veuillez simplement préciser son montant:
      </p>
      <form className="flex">
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
      <div className="flex flex-col">
        <div className="admin-bon">
          <p>ID</p>
        </div>
        {bonListe.map((element) => (
          <div key={element.id} className="flex text-xl gap-4 items-center">
            <p className="font-mont font-semibold">{element.code}</p>
            <p className="font-mont font-semibold">{element.gain_credit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BonManagement;
