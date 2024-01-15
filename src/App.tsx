// App.tsx

import React, { useState } from 'react';
import TitlePage from './components/TitlePage/TitlePage';
import GamePage from './components/GamePage/GamePage';
import './App.css';

const App: React.FC = () => {
  const [playerName, setPlayerName] = useState<string>('');

  const handleStartGame = (name: string) => {
    setPlayerName(name);
    // Ajoutez ici la logique pour passer à la prochaine étape du jeu.
  };

  return (
    <div className="app">
      {playerName === '' ? (
        <TitlePage onStart={handleStartGame} />
      ) : (
        <GamePage playerName={playerName} />
      )}
    </div>
  );
};

export default App;

