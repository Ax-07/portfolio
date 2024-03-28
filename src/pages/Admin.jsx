import { useParams} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { LoginForm } from "../admin/loginForm";
import { useSelector } from "react-redux";
import { useGetProjetByIdQuery, useGetProjetQuery } from "../api/projetApi";
import { ProjetForm } from "../components/projet/ProjetForm";
import { SideNav } from "../components/sideNav/SideNav";
import { ProjetList } from "../components/projet/ProjetList";
import { Projet } from "./Projet";
import { Home } from "./Home";

export const Admin = () => {
  const isConnected = useSelector((state) => state.auth.isConnected);

  if (!isConnected) return (<section><LoginForm /></section>);

  return (
    <div className="dashboard" style={{display: "flex", flexDirection: "row", width:"100%"}}>
      <SideNav />
      <section className="dashboard__content">
        <Routes>
          <Route path="/" element={<AdminHome/>} />
          <Route path="projects" element={<ProjetList/>} />
          <Route path="project/:id" element={<Projet/>} />
          <Route path="add-project" element={<ProjetForm/>} />
          <Route path="edit-project/:id" element={<EditProjetForm/>} />
        </Routes>
      </section>
    </div>
  );
};

const AdminHome = () => {
  const { data: projets } = useGetProjetQuery();
    return (
        <>
        <h2>Admin</h2>
        <p>Nombre de projets : {projets?.length}</p>
        <Home />
        </>
    );
    }
    const EditProjetForm = () => {
      const { id } = useParams(); // Obtention de l'ID du projet depuis l'URL
      const { data: projet } = useGetProjetByIdQuery(id); // Récupération des données du projet à partir de l'ID
    console.log(projet);
      return <ProjetForm projet={projet} />;
    };