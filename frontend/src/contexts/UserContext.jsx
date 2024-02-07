import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState(false);

  const refreshUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/players/${user.id}`
      );
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const value = useMemo(() => {
    return { user, setUser, refreshUser };
  }, [user, setUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
