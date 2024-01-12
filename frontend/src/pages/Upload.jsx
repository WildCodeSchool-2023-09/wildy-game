import axios from "axios";
import { useState } from "react";
import { success, failed } from "../services/toast";

function Upload() {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("banner", file);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/banner`,
        formData
      );
      if (res.status === 200) {
        success(`La bannière a été ajoutée`);
      }
    } catch (error) {
      failed("Erreur lors de l'ajout de la bannière");
    }
  };
  return (
    <div className="mt-96 ">
      <form
        method="post"
        className="flex justify-center flex-col items-center"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          name="banner"
          id="banner"
          accept="image/png, image/jpeg"
          onChange={handleChange}
        />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default Upload;
