// RulesModal.tsx

import React from 'react';
import './RulesModal.css';

interface RulesModalProps {
  onClose: () => void;
}

const RulesModal: React.FC<RulesModalProps> = ({ onClose }) => {
  return (
    <div className="rules-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Règles</h2>
        <p>Vous avez six essais pour deviner le mot du jour, entre 6 et 9 lettres, commun à tous. <br />
        Vous ne pouvez proposer que des mots commençant par la même lettre que le mot recherché, et qui se trouvent dans notre dictionnaire. <br />
        Les noms propres ne sont pas acceptés. <br />
        <img src="src/assets/regles.png" alt="Explication règles du jeu" /> <br />
        🟥 Les lettres entourées d'un carré rouge sont bien placées <br />
        🟡 Les lettres entourées d'un cercle jaune sont mal placées (mais présentes dans le mot). <br />
        🟦 Les lettres qui restent sur fond bleu ne sont pas dans le mot.</p> <br />
      </div>
    </div>
  );
};

export default RulesModal;
