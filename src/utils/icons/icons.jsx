import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTrashAlt, faPenToSquare, faPlus, faChevronUp, faUser, faMobileScreenButton, faDisplay, faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';

export const icons = { 
    trash: <FontAwesomeIcon icon={faTrash} /> ,
    trashAlt: <FontAwesomeIcon icon={faTrashAlt} /> ,
    penToSquare: <FontAwesomeIcon icon={faPenToSquare} />,
    add: <FontAwesomeIcon icon={faPlus} />,
    chevronUp: <FontAwesomeIcon icon={faChevronUp} />,
    user: <FontAwesomeIcon icon={faUser} />,
    mobile: <FontAwesomeIcon icon={faMobileScreenButton} />,
    desktop: <FontAwesomeIcon icon={faDisplay} />,
    tablet: <FontAwesomeIcon icon={faTabletScreenButton} />
};