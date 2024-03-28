import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [openDropNav, setOpenDropNav] = useState(false);

  const value = {
    openDropNav,
    setOpenDropNav
  };
  
  return (
    <NavContext.Provider value={value}>
      {children}
    </NavContext.Provider>
  );
}

NavProvider.propTypes = {
  children: PropTypes.node.isRequired,
};