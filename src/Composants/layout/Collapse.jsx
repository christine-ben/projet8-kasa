import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

// Icônes flèche vers le bas et vers le haut
const angleDown = <FontAwesomeIcon icon={faAngleDown} />;
const angleUp = <FontAwesomeIcon icon={faAngleUp} />;

// Composant qui gère l'affichage rétractable
const Collapse = (props) => {
  // État pour suivre si le contenu est ouvert ou fermé
  const [openTab, setOpenTab] = useState(false);

  // Gère le clic sur l'en-tête pour ouvrir ou fermer le contenu
  const toggleContent = () => {
    setOpenTab(!openTab);
  };

  return (
    <>
      {/* En-tête cliquable */}
      <div onClick={toggleContent} className="collapse_header">
        {/* Titre de l'en-tête */}
        <h2 className="collapse_header_title">{props.title}</h2>
        {/* Icône de flèche vers le bas ou vers le haut en fonction de l'état */}
        <i className="collapse_header_icon">{openTab ? angleUp : angleDown}</i>
      </div>

      {/* Affiche le contenu si openTab est true */}
      {openTab && <div className="collapse_content">{props.content}</div>}
    </>
  );
}

export default Collapse;
