import { useEffect } from "react";

export const Blob = () => {
    useEffect(() => {
        const el = document.querySelector("main");
        const handleScroll = () => {
          let currentScrollPosition = el.scrollTop;
          let blob = document.querySelector(".blob");
          blob.style.setProperty('--scroll-position', `${currentScrollPosition*0.07}%`);
          blob.style.setProperty('--scroll-position-reverse', `${-currentScrollPosition*0.07}%`);
        };
    
        el.addEventListener('scroll', handleScroll);
    
        // Nettoyer l'écouteur d'événements lors du démontage
        return () => {
          el.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className="blob-container">
            <div className="blob"></div>
        </div>
    );
};
