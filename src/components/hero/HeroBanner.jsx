import { Link } from "react-router-dom";
import { SeparateLines } from "../separateLines/SeparateLines.jsx";
import picture from "../../../public/images/vue-depuis-lavouvesc.jpg";

export const Hero = () => {
  return (
    <div className="hero">
      {/* <SeparateLines type="double" /> */}
      <img src={picture} alt="profil" className="hero__img" />
      <div className="hero__content">
        <h1 className="hero__title">XAVIER AFFRINGUE</h1>
        <h2 className="hero__sub-title">DEVELOPPEUR WEB</h2>
        <Link className="btn hero__cta" to="#projets" data-target="#projets">
          Voir mes projets
        </Link>
      </div>

      {/* <SeparateLines type="double" /> */}
    </div>
  );
};
