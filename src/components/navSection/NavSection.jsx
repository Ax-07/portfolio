import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkModeBtn } from "../darkModeBtn/DarkModeBtn";

export const NavSection = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname + location.hash);
  
  useEffect(() => {
    setActiveLink(location.pathname + location.hash);
  }, [location]);

  return (
    <nav className="nav-section">
      <ul className="nav-section__list">
        <li className="nav-section__item">
          <Link to="/#about" className={`nav-section__link ${activeLink === '/#about' ? 'active' : ''}`}>A propos</Link>
        </li>
        <li className="nav-section__item">
          <Link to="/#skill" className={`nav-section__link ${activeLink === '/#skill' ? 'active' : ''}`}>Compétences</Link>
        </li>
        <li className="nav-section__item">
          <Link to="/#projets" className={`nav-section__link ${activeLink === '/#projets' ? 'active' : ''}`}>Projets</Link>
        </li>
        <li className="nav-section__item">
          <Link to="/#contact" className={`nav-section__link ${activeLink === '/#contact' ? 'active' : ''}`}>Contact</Link>
        </li>
        <li className="nav-section__item">
          <DarkModeBtn />
        </li>
      </ul>
    </nav>
  );
};