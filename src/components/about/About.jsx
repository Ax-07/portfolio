import { Link } from "react-router-dom";
import profilPicture from "../../../public/images/IMG-0272.jpg";
import { SeparateLine } from "../separateLines/SeparateLine";

const text =
  "Passionné par l'informatique et le développement depuis plusieurs années, j'ai récemment choisi de me reconvertir en tant que développeur web.";
const text2 =
  "J'ai commencé par me former en autodidacte, puis j'ai suivi une formation chez Openclassrooms pour obtenir une certification professionnelle d'intégrateur web.";
const text3 =
  "Motivé par la curiosité et l'envie de progresser, je suis à la recherche d'un premier poste de développeur web pour mettre en pratique mes connaissances et contribuer à des projets innovants.";

export const About = () => {
  return (
    <div className="about">
      <img src={profilPicture} alt="profil picture" className="about__img" />
        <h3 className="about__title">A propos de moi</h3>
        <SeparateLine />
        <br />
        <p className="about__text">{text}</p>
        <p className="about__text">{text2}</p>
        <p className="about__text">{text3}</p>
        <div className="about__cta">
        <Link className="btn" to="#projets" data-target="#projets">
          Voir mes projets
        </Link>
        </div>
    </div>
  );
};
