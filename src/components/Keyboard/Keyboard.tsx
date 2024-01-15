import React from 'react';
import './Keyboard.css';

interface KeyboardProps {
  onLetterClick: (letter: string) => void;
  onDeleteClick: () => void;
  onValidateClick: () => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onLetterClick, onDeleteClick, onValidateClick }) => {
  const rows = [
    ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
    ['W', 'X', 'C', 'V', 'B', 'N'],
  ];

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((letter, index) => (
            <button key={index} onClick={() => onLetterClick(letter)}>
              {letter}
            </button>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <button className="delete" onClick={onDeleteClick}>
          Supprimer
        </button>
        <button className="validate" onClick={onValidateClick}>
          Valider
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
