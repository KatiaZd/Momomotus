import React, { useState } from 'react';
import TitlePage from './components/TitlePage/TitlePage';
import './App.css';

const App: React.FC = () => {
  const [playerName, setPlayerName] = useState<string>('');

  const handleStartGame = (name: string) => {
    setPlayerName(name);
    // Ajoutez ici la logique pour passer à la prochaine étape du jeu.
  };

  return (
    <div className="app">
      {/* Autres composants ou pages ici */}
      {playerName === '' ? <TitlePage onStart={handleStartGame} /> : <div>La suite du jeu ici</div> }
    </div>
  );
};

export default App;
