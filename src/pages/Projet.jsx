import { useParams } from "react-router-dom";
import { useGetProjetByIdQuery } from "../api/projetApi";
import { Slider } from "../components/slider/Slider";
import { GithubIcon, GlobeIcon, iconsStack } from "../utils/icons/iconsStack";

export const Projet = () => {
  const { id } = useParams();
  const { data: projet = [] } = useGetProjetByIdQuery(id);

  return (
    <section className="section projet">
      <Slider data={projet.image} />
      <h1 className="projet__title">{projet.title}</h1>
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

      <p className="projet__description">{projet.description}</p>
      <div className="projet__link-wrapper">
        <a
          href={projet.githubRepository}
          target="_blank"
          rel="noopener noreferrer"
          className="projet__github"
        >
          <GithubIcon />
        </a>
        <a
          href={projet.website}
          target="_blank"
          rel="noopener noreferrer"
          className="projet__linkWeb"
        >
          <GlobeIcon />
        </a>
      </div>
    </section>
  );
};
