
import React from 'react';
import Header from '../Header/Header';
import './GamePage.css';


interface GamePageProps {
  playerName?: string;
}

const GamePage: React.FC<GamePageProps> = ({ playerName }) => {
  return (
    <div className="game-page">
    
      <Header title="Momomotus" playerName={playerName} />
      {/* Reste du contenu de la page de jeu */}
    </div>
  );
};

export default GamePage;

