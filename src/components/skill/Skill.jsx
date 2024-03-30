import { iconsStack } from "../../utils/icons/iconsStack";
import { SeparateLine } from "../separateLines/SeparateLine";

export const Skill = () => {
  const languages = ["html", "css", "javascript"];
  const frameworks = ["react", "node", "redux"];
  const databases = ["mongodb", "sqlite"];
  const tools = ["github", "vscode", "figma"];
  return (

      <div className="skill">
        <h3 className="skill__title">Compétences</h3>
        <SeparateLine />
        <br />
        <ul className="skill__list">
          {languages.map((language, index) => {
            const icon = iconsStack.find(
              (icon) => icon.name.toLowerCase() === language.toLowerCase()
            );
            return (
              <li key={index} className="skill__item">
                {icon && icon.component}
              </li>
            );
          })}
        </ul>
        <hr />
        <ul className="skill__list">
          {frameworks.map((framework, index) => {
            const icon = iconsStack.find(
              (icon) => icon.name.toLowerCase() === framework.toLowerCase()
            );
            return (
              <li key={index} className="skill__item">
                {icon && icon.component}
              </li>
            );
          })}
        </ul>
        <hr />
        <ul className="skill__list">
          {databases.map((database, index) => {
            const icon = iconsStack.find(
              (icon) => icon.name.toLowerCase() === database.toLowerCase()
            );
            return (
              <li key={index} className="skill__item">
                {icon && icon.component}
              </li>
            );
          })}
        </ul>
        <hr />
        <ul className="skill__list">
          {tools.map((tool, index) => {
            const icon = iconsStack.find(
              (icon) => icon.name.toLowerCase() === tool.toLowerCase()
            );
            return (
              <li key={index} className="skill__item">
                {icon && icon.component}
              </li>
            );
          })}
        </ul>
      </div>
  );
};
