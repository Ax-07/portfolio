import { NavLink } from "react-router-dom";
import { useDeleteProjetMutation, useGetProjetQuery } from "../../api/projetApi";
import { icons } from "../../utils/icons/icons";

export const SideNav = () => {
  const { data: projets = [], refetch: refetchProjet } = useGetProjetQuery();
  const [deleteProjet] = useDeleteProjetMutation();

  const onDeleteProjet = async (id) => {
    try {
      await deleteProjet(id).unwrap();
      refetchProjet();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sideNav">
      <div className="sideNav__header">
        <NavLink to="/admin" className="sideNav__header-title">
          Accueil
        </NavLink>
      </div>
      <br />
      <div className="sideNav__menu">
        <div className="sideNav__menu-title">
          <NavLink to="/admin/projects" className="sideNav__link">Projets</NavLink>
          <NavLink to="/admin/add-project" className="sideNav__link">{icons.add}</NavLink>
        </div>
        <ul className="sideNav__list">
          {projets.map((projet, id) => (
            <li key={id} className="sideNav__item">
              <NavLink to={`/admin/project/${projet.id}`} className="sideNav__link">{projet.title}</NavLink>
              <div className="sideNav__item-wrapper">
                <NavLink to={`/admin/edit-project/${projet.id}`} className="sideNav__link">{icons.penToSquare}</NavLink>
                <span onClick={() => onDeleteProjet(projet.id)}>{icons.trashAlt}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <span className="notification"></span> */}
    </div>
  );
};
