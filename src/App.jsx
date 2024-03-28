import { useScrollToHashElement } from "./utils/hooks/useScrollToHashElement";
import { DarkModeProvider } from "./components/darkModeBtn/DarkModeBtn";
import { NavProvider } from "./context/navbarContext";
import { Header } from "./layout/header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projet } from "./pages/Projet";
import { Admin } from "./pages/Admin";
import { ProjetForm } from "./components/projet/ProjetForm";
import { Footer } from "./layout/footer/Footer";
import { Blob } from "./components/blob/Blob";
import "./index.css";

function App() {
  useScrollToHashElement();
  
  return (
    <>
      <DarkModeProvider>
        <NavProvider>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projet/:id" element={<Projet />} />
              <Route path="add-project" element={<ProjetForm />} />
              <Route path="edit-project/:id" element={<ProjetForm />} />
              <Route path="*" element={<Home />} />
              <Route path="admin/*" element={<Admin />} />
            </Routes>
          <Footer />
          </main>
          <Blob />
        </NavProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
