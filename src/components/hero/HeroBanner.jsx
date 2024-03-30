import { Link } from "react-router-dom";
import picture from "../../../public/images/vue-depuis-lavouvesc.jpg";
import arrow from "../../assets/icons/btn-rightbtn-arrow (1).svg";

export const Hero = () => {
  return (
    <div className="hero">
      {/* <SeparateLines type="double" /> */}
      <img src={picture} alt="profil" className="hero__img" />
      <div className="hero__content">
        <h1 className="hero__title">XAVIER AFFRINGUE</h1>
        <h2 className="hero__sub-title">DEVELOPPEUR WEB</h2>
        <Link to="#about" data-target="#about">
          {/* Voir mes projets */}
          <img src={arrow} alt="arrow" className="hero__cta"/>
        </Link>
      </div>

      {/* <SeparateLines type="double" /> */}
    </div>
  );
};
