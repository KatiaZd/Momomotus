// Dans votre composant GamePage.tsx
import React from 'react';
import Header from '../Header/Header';
import './GamePage.css';
import Keyboard from '../Keyboard/Keyboard';
import { useState } from 'react';

interface GamePageProps {
  playerName?: string;
}

const GamePage: React.FC<GamePageProps> = ({ playerName }) => {
  const [wordToGuess] = useState<string>('REACT');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string[]>([]);

  const handleLetterClick = (letter: string) => {
    const isCorrect = checkCorrectness(letter);

    setGuessedLetters([...guessedLetters, letter]);
    setFeedback([...feedback, isCorrect ? 'correct' : 'incorrect']);
  };

  const checkCorrectness = (letter: string): boolean => {
    // Implémentez la logique pour vérifier si la lettre est correcte
    // Retournez true si la lettre est correcte, false sinon
    const correctIndex = wordToGuess.indexOf(letter);
    return correctIndex !== -1 && correctIndex === guessedLetters.length;
  };

  const handleDeleteClick = () => {
    // Implémentez la logique pour supprimer la dernière lettre
    setGuessedLetters(guessedLetters.slice(0, -1));
    setFeedback(feedback.slice(0, -1));
  };

  const handleValidateClick = () => {
    // Implémentez la logique pour valider la proposition
    // Vous pouvez ajouter du code ici pour traiter la fin de la partie, etc.
    console.log('Validation clicked');
  };

  return (
    <div className="game-page">
      <Header title="Momomotus" playerName={playerName} />
      {/* Affichez la première lettre du mot en rouge */}
      <div className="word-display">
        {wordToGuess.split('').map((char, index) => (
          <span
            key={index}
            className={feedback[index] === 'correct' ? 'correct' : 'default'}
          >
            {guessedLetters[index] || (feedback[index] === 'correct' ? char : '_')}
          </span>
        ))}
      </div>
      {/* Reste du contenu de la page de jeu */}
      <Keyboard 
      onLetterClick={handleLetterClick} 
      onDeleteClick={handleDeleteClick}
      onValidateClick={handleValidateClick}
      />
    </div>
  );
};

export default GamePage;