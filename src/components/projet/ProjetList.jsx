import { useRef } from "react";
import { useGetProjetQuery } from "../../api/projetApi";
import { ProjetCard } from "./ProjetCard";
import { SeparateLine } from "../separateLines/SeparateLine";

export const ProjetList = () => {
  const { data: projets, error } = useGetProjetQuery();
  const projetsRef = useRef(null);

  if (error) return <div>failed to load</div>;
  if (!projets) return <div>loading...</div>;

  return (
    <div className="projet" ref={projetsRef}>
      <h3>Projets</h3>
      <SeparateLine />
      <br />
      <ul className="projet-list">
      {projets &&
        projets.map((projet, id) => (
        <li key={id} className="projet-list__item">
          <ProjetCard  {...projet} />
        </li>)
        )}
      </ul>
    </div>
  );
};
