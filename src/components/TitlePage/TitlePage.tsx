import React, { useState, ChangeEvent } from 'react';
import './TitlePage.css';

interface TitlePageProps {
  onStart: (name: string) => void;
}

const TitlePage: React.FC<TitlePageProps> = ({ onStart }) => {
  const [name, setName] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleStartClick = () => {
    onStart(name);
  };

  return (
    <div className="title-page">
    <h1>Momomotus <br /> 🟥🟡🟦</h1>
      <p>Pour commencer, quel est ton prénom ?</p>
    <input type="text" value={name} onChange={handleInputChange} />
    <button className="validate" onClick={handleStartClick}>Let's go !</button>
     
      
    </div>
  );

};

export default TitlePage;
