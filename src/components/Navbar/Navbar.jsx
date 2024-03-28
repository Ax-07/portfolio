import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { navContext } from "../../context/navbarContext";

export const Navbar = () => {
  const { setOpenDropNav } = useContext(navContext);
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="topNav__item" onClick={() => setOpenDropNav(false)}>
          <NavLink className="nav__link" to="/add-project">
            Ajouter un projet
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
