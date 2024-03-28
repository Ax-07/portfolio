import { Link } from "react-router-dom";
import { iconsStack } from "../../utils/icons/iconsStack";

export const ProjetCard = (projet) => {
  console.log(projet);
  return (
    <article className="projet-card">
        <Link to={`/projet/${projet.id}`}>
      {/* <Slider data={projet.image} />         */}
      {/* {projet.image && <img className="projet-card__img" src={projet.image[0].image.mobile} alt={projet.alt} />} */}
      <h2 className="projet-card__title">{projet.title}</h2>
        <div className="projet-card__content">
          <p>{projet.description}</p>
        </div>
        <ul className="projet-card__stacks">
          {Array.isArray(projet.stack) ? (
            projet.stack.map((stack, index) => {
              const icon = iconsStack.find(
                (icon) => icon.name.toLowerCase() === stack.toLowerCase()
              );

              return (
                <li key={index} className="projet-card__stacks-item">
                  {icon && icon.component}
                </li>
              );
            })
          ) : typeof projet.stack === "string" ? (
            <li className="projet-card__stacks-item">
              {
                iconsStack.find(
                  (icon) =>
                    icon &&
                    typeof icon.name === "string" &&
                    icon.name.toLowerCase() === projet.stack.toLowerCase()
                )?.component
              }
            </li>
          ) : null}
        </ul>
    </Link>
      </article>
  );
};
