import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const elementId = location.hash.slice(1); // Supprime le caractère '#'

    // Ajoute un délai avant de tenter de faire défiler l'élément
    setTimeout(() => {
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", inline: "nearest" });
      }
    }, 10); // Vous pouvez ajuster la durée du délai si nécessaire
  }, [location]);
};
