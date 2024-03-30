import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
// Créer le contexte
export const DarkModeContext = createContext();

// Créer le fournisseur de contexte
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Mettre à jour le mode sombre en fonction de localStorage
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      document.body.classList.add("dark-mode");
      setIsDarkMode(true);
    }
  }, []);

  // Basculer le mode sombre
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      setIsDarkMode(true);
    } else {
      localStorage.removeItem("darkMode");
      setIsDarkMode(false);
    }
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkModeBtn = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="darkModeBtn-container">
        <input
            type="checkbox"
            name="darkModeBtn"
            id="darkModeBtn"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            aria-label="dark mode button"
        />
        <label htmlFor="darkModeBtn" className="darkModeBtn">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
        </label>
    </div>
  );
};

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};