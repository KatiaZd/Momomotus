import React from 'react';
import TitlePage from './components/TitlePage/TitlePage';
import GamePage from './components/GamePage/GamePage';
import './App.css';

const App: React.FC = () => {
  const [playerName, setPlayerName] = React.useState('');

  const handleStartGame = (name: string) => {
    setPlayerName(name);
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

