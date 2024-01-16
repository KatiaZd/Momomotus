import React from 'react';
import Header from '../Header/Header';
import './GamePage.css';
import Keyboard from '../Keyboard/Keyboard';
import { useState } from 'react';

interface GamePageProps {
  playerName?: string;
}

const GamePage: React.FC<GamePageProps> = ({ playerName }) => {
  const [wordToGuess] = useState<string>('IMPLEMENTER');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string[]>([]);

  const handleLetterClick = (letter: string) => {
    const isCorrect = checkCorrectness(letter);

    setGuessedLetters([...guessedLetters, letter]);
    setFeedback([...feedback, isCorrect ? 'correct' : 'incorrect']);
  };

  const checkCorrectness = (letter: string): boolean => {
    const correctIndex = wordToGuess.indexOf(letter);
    return correctIndex !== -1 && correctIndex === guessedLetters.length;
  };

  const handleDeleteClick = () => {
    setGuessedLetters(guessedLetters.slice(0, -1));
    setFeedback(feedback.slice(0, -1));
  };

  const handleValidateClick = () => {
    console.log('Validation clicked');
  };

  return (
    <div className="game-page">
      <Header title="Momomotus" playerName={playerName} />
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
      {/* Grille bleue */}
      <div className="grid-container">
        <div className="grid">
          {Array.from({ length: 8 }, (_, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {Array.from({ length: 6 }, (_, colIndex) => (
                <div key={colIndex} className="grid-cell">
                  {guessedLetters[rowIndex * 6 + colIndex]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Keyboard 
      onLetterClick={handleLetterClick} 
      onDeleteClick={handleDeleteClick}
      onValidateClick={handleValidateClick}
      />
    </div>
  );
};

export default GamePage;