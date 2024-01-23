import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";
import { success, failed } from "../services/toast";
import close from "../assets/images/close.svg";

function Upload({ handleCloseEdit }) {
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
    <div className="modal">
      <button type="button" className="close" onClick={() => handleCloseEdit()}>
        <img src={close} alt="close" width={30} />
      </button>
      <form
        method="post"
        className="banner-form flex justify-center gap-20 flex-col items-center"
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
        <button
          type="submit"
          className="confirm"
          onClick={() => handleCloseEdit()}
        >
          Valider
        </button>
      </form>
    </div>
  );
}

Upload.propTypes = {
  handleCloseEdit: PropTypes.func.isRequired,
};

export default Upload;
