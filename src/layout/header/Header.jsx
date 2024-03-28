import { NavLink } from "react-router-dom";
import { BtnBurger } from "../../components/btnBurger/BtnBurger";
import { NavSection } from "../../components/navSection/NavSection";
import { DarkModeBtn } from "../../components/darkModeBtn/DarkModeBtn";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import { useContext } from "react";
import { NavContext } from "../../context/navbarContext";
import { useSelector } from "react-redux";
import { icons } from "../../utils/icons/icons";

const MOBILE_BREAKPOINT = 768;

export const Header = () => {
  const { windowWidth } = useWindowSize();
  const { openDropNav } = useContext(NavContext);
  const isMobile = windowWidth < MOBILE_BREAKPOINT;
  const isConnected = useSelector((state) => state.auth.isConnected);

  return (
    <header className="header">
      <NavLink className="header__logo" to="/#hero">
        <span className="header__logo-text">{"<Ax-@7/>"}</span>
      </NavLink>

      <div className="header__nav">
        {isMobile && openDropNav && (
          <>
            <NavSection />
          </>
        )}
        {!isMobile && <NavSection />}
      </div>
        {isMobile && <BtnBurger windowWidth={windowWidth} />}

      {!isMobile && (
          <NavLink to="/admin" className={`admin-nav ${isConnected?"admin-nav--connected":""}`}>{isConnected ? icons.user : ""}</NavLink>
      )}
    </header>
  );
};
