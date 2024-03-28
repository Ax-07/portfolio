import { ProjetList } from "../components/projet/ProjetList";
import { Hero } from "../components/hero/HeroBanner";
import { ContactForm } from "../components/contact/ContactForm";
import { Skill } from "../components/skill/Skill";
import { About } from "../components/about/About";

export const Home = () => {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="projets">
        <ProjetList />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
};
