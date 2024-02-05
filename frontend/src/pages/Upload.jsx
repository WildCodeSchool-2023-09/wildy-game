import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";
import { success, failed } from "../services/toast";
import close from "../assets/images/close.svg";
import upload from "../assets/images/upload.png";

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
        formData,
        { withCredentials: true }
      );
      if (res.status === 200) {
        success(`La bannière a été ajoutée`);
        handleCloseEdit();
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
        <label htmlFor="banner" style={{ cursor: "pointer" }}>
          <img src={upload} alt="upload" width={150} />
        </label>
        <input
          type="file"
          name="banner"
          id="banner"
          hidden
          accept="image/png, image/jpeg"
          onChange={handleChange}
        />
        <button type="submit" className="confirm">
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
