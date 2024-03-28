import { CodepenIcon, GithubIcon, LinkedinIcon } from "../../utils/icons/iconsStack";

export const Footer = () => {
  const lienCodePen = "https://codepen.io/ax-07";
  const lienLinkedIn = "https://linkedin.com/in/xavier-affringue-374937267";
  const lienGitHub = "https://github.com/Ax-07";

  return (
    <footer className="footer">
      <div className="stack">
        <a
          href={lienCodePen}
          target="_blank"
          rel="noreferrer"
          aria-label="Lien vers mon profil CodePen"
        >
          <CodepenIcon />
        </a>
        <a
          href={lienLinkedIn}
          target="_blank"
          rel="noreferrer"
          aria-label="Lien vers mon profil LinkedIn"
        >
          <LinkedinIcon />
        </a>
        <a
          href={lienGitHub}
          target="_blank"
          rel="noreferrer"
          aria-label="Lien vers mon profil GitHub"
        >
          <GithubIcon />
        </a>
      </div>
      <div className="footer__copyrigth">
        <p>© 2024 Affringue Xavier</p>
      </div>
    </footer>
  );
};
