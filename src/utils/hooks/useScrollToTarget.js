import { useEffect } from "react";

export const useScrollToTarget = () => {
    useEffect(() => {
        const links = document.querySelectorAll('.nav-section__link');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('data-target'); // exemple: <a href="#about" data-target="#about">About</a>
                const targetSection = document.querySelector(targetId);
                links.forEach(link => {
                    if (link.classList.contains('active')) {
                        link.classList.remove('active');
                    }
                });          
                link.classList.add('active');
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block:"start"
                    });
                }
            });
        });
    },[])};
