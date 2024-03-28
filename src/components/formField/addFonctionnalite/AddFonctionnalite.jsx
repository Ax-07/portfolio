import { useState } from "react";
import PropTypes from "prop-types";

export const AddFonctionnalite = ({ fonctionnalite, setFonctionnalite }) => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");

  const handleAddFonctionnalite = () => {
    setFonctionnalite([...fonctionnalite, { titre, description }]);
    setTitre("");
    setDescription("");
  };
  const handleDeleteFonctionnaliteById = (fonctionnaliteId) => {
    setFonctionnalite(
      fonctionnalite.filter((_, index) => index !== fonctionnaliteId)
    );
  };

  return (
    <div className="fonctionnalites">
      <label htmlFor="fonctionnalite">Fonctionnalité</label>
      <input
        type="text"
        name="fonctionnalites-titre"
        value={titre}
        placeholder="Titre de la fonctionnalité"
        onChange={(e) => setTitre(e.target.value)}
      />
      <input
        type="text"
        name="fonctionnalites-description"
        value={description}
        placeholder="Description de la fonctionnalité"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddFonctionnalite}>Ajouter</button>
      <ul>
        {fonctionnalite?.map(({ titre, description }, index) => (
          <li key={index} onClick={() => handleDeleteFonctionnaliteById(index)}>
            <h2>{titre}</h2>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

AddFonctionnalite.propTypes = {
  fonctionnalite: PropTypes.arrayOf(
    PropTypes.shape({
      titre: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  setFonctionnalite: PropTypes.func,
};
