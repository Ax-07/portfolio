/* eslint-disable react-refresh/only-export-components */
// components.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJs, faCss3Alt, faReact, faSass, faNode, faDocker, faAws, faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import sqlite from '../../assets/icons/sqlite-ar21.svg';
import mongoDb from '../../assets/icons/mongodb-ar21.svg';
import iconVscode from '../../assets/icons/iconVsCode.svg';
import redux from '../../assets/icons/redux.svg';
import figma from '../../assets/icons/figma.svg';
import { DarkModeContext } from '../../components/darkModeBtn/DarkModeBtn';
import { useContext } from 'react';

const colors = {
  html: '#dd4b25',
  js: '#f7e025',
  css: '#008ccc',
  react: '#66dbfb',
  sass: '#c76494',
  node: '#58a149',
  docker: '#0db7ed',
  aws: '#f79400',
  codepen: '#222',
  github: '#222',
  linkedin: '#2f6cb4',
  globe: '#222',
};

export const HtmlIcon = () => <FontAwesomeIcon icon={faHtml5} className='stack__icon' style={{color: colors.html}} />;
export const JavascriptIcon = () => <FontAwesomeIcon icon={faJs} className='stack__icon' style={{color: colors.js}} />;
export const CssIcon = () => <FontAwesomeIcon icon={faCss3Alt} className='stack__icon' style={{color: colors.css}} />;
export const ReactIcon = () => <FontAwesomeIcon icon={faReact} className='stack__icon' style={{color: colors.react}} />;
export const SassIcon = () => <FontAwesomeIcon icon={faSass} className='stack__icon' style={{color: colors.sass}} />;
export const NodeIcon = () => <FontAwesomeIcon icon={faNode} className='stack__icon' style={{color: colors.node}} />;
export const DockerIcon = () => <FontAwesomeIcon icon={faDocker} className='stack__icon' style={{color: colors.docker}} />;
export const AwsIcon = () => <FontAwesomeIcon icon={faAws} className='stack__icon' style={{color: colors.aws}} />;
export const LinkedinIcon = () => <FontAwesomeIcon icon={faLinkedin} className='stack__icon' style={{color: colors.linkedin}} />;

const useCreateIconComponent = (icon, color) => {
  const { isDarkMode } = useContext(DarkModeContext);
  return <FontAwesomeIcon icon={icon} className='stack__icon' style={{color: isDarkMode ? '#fff' : color}} />;
};
export const CodepenIcon = () => useCreateIconComponent(faCodepen, colors.codepen);
export const GithubIcon = () => useCreateIconComponent(faGithub, colors.github);
export const GlobeIcon = () => useCreateIconComponent(faGlobe, colors.globe);

export const SqliteIcon = () => <img src={sqlite} alt='sqlite icon' className='stack__icon' />;
export const MongodbIcon = () => <img src={mongoDb} alt='mongodb icon' className='stack__icon' />;
export const VscodeIcon = () => <img src={iconVscode} alt='vscode icon' className='stack__icon' />;
export const ReduxIcon = () => <img src={redux} alt='redux icon' className='stack__icon' />;
export const FigmaIcon = () => <img src={figma} alt='figma icon' className='stack__icon' />;

export const iconsStack = [
  { name: 'html', component: <HtmlIcon /> },
  { name: 'javascript' || 'js', component: <JavascriptIcon /> },
  { name: 'css', component: <CssIcon /> },
  { name: 'react', component: <ReactIcon /> },
  { name: 'sass', component: <SassIcon /> },
  { name: 'scss', component: <SassIcon />},
  { name: 'node', component: <NodeIcon /> },
  { name: 'docker', component: <DockerIcon /> },
  { name: 'aWS', component: <AwsIcon /> },
  { name: 'codepen', component: <CodepenIcon /> },
  { name: 'github', component: <GithubIcon /> },
  { name: 'linkedin', component: <LinkedinIcon /> },
  { name: 'globe', component: <GlobeIcon /> },
  { name: 'sqlite', component: <SqliteIcon /> },
  { name: 'mongodb', component: <MongodbIcon /> },
  { name: 'vscode', component: <VscodeIcon /> },
  { name: 'redux', component: <ReduxIcon /> },
  { name: 'figma', component: <FigmaIcon /> },
];