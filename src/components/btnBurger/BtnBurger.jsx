import { useEffect, useContext } from "react";
import { NavContext } from "../../context/navbarContext";
import PropTypes from "prop-types";

export const BtnBurger = ({windowWidth}) => {
  const { openDropNav, setOpenDropNav } = useContext(NavContext);

  const toggle = () => {
    setOpenDropNav(!openDropNav);
  };
  useEffect(() => {
    if (windowWidth > 767) {
      setOpenDropNav(false);
    }
  }, [setOpenDropNav, windowWidth]);

  return (
    <div
      className={`burgerBtn ${openDropNav ? "burgerBtn--open" : ""}`}
      onClick={toggle}
    >
      {windowWidth < 1024 ? (
        <div className="burgerBtn__lines">
          <span className="burgerBtn__line"></span>
          <span className="burgerBtn__line"></span>
          <span className="burgerBtn__line"></span>
        </div>
      ) : null}
    </div>
  );
};

BtnBurger.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};
