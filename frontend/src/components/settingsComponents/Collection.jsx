import PropTypes from "prop-types";
import axios from "axios";
import { useEffect } from "react";
import { useUser } from "../../contexts/UserContext";

export default function Collection({ secondaryColor, textColor }) {
  const { user } = useUser();
  useEffect(() => {
    axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/collection/player/${user.id}`
    );
  }, []);
  return (
    <section className="collection" style={{ backgroundColor: secondaryColor }}>
      <h1 style={{ color: textColor }}>COLLECTION</h1>
      <div className="collection-content">------items------</div>
    </section>
  );
}

Collection.propTypes = {
  secondaryColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
