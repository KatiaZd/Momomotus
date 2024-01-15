import React from 'react';
import RulesModal from '../RulesModal/RulesModal';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const [showRulesModal, setShowRulesModal] = React.useState(false);
  
    const handleOpenRules = () => {
      setShowRulesModal(true);
    };
  
    const handleCloseRules = () => {
      setShowRulesModal(false);
    };
  
    return (
      <header>
        <h1>{title}</h1>
        <button onClick={handleOpenRules}>
        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
            <path d="M25.5 4.78125C14.0549 4.78125 4.78125 14.0549 4.78125 25.5C4.78125 36.9451 14.0549 46.2188 25.5 46.2188C36.9451 46.2188 46.2188 36.9451 46.2188 25.5C46.2188 14.0549 36.9451 4.78125 25.5 4.78125ZM25.5 44.4955C15.0311 44.4955 6.50449 35.9789 6.50449 25.5C6.50449 15.0311 15.0211 6.50449 25.5 6.50449C35.9689 6.50449 44.4955 15.0211 44.4955 25.5C44.4955 35.9689 35.9689 44.4955 25.5 44.4955Z" fill="#FFFEFE"/>
            <path d="M25.8586 14.543C21.5555 14.543 19.1549 16.565 19.125 20.7387H20.9977C20.9379 17.7105 22.5416 16.1068 25.7689 16.1068C28.0799 16.1068 30.0123 17.7205 30.0123 20.0713C30.0123 21.5953 29.1855 22.8305 28.0799 23.8664C25.8287 25.9383 25.1912 27.4523 25.0816 30.2912H26.9742C27.0838 27.7213 27.024 27.2332 29.2951 24.982C30.8092 23.5676 31.875 22.1631 31.875 19.9816C31.875 16.575 29.1457 14.543 25.8586 14.543Z" fill="#FFFEFE"/>
            <path d="M25.9282 33.1002C24.9919 33.1002 24.2349 33.8473 24.2349 34.7736C24.2349 35.7 24.9919 36.457 25.9282 36.457C26.8645 36.457 27.6216 35.71 27.6216 34.7736C27.6216 33.8473 26.8645 33.1002 25.9282 33.1002Z" fill="#FFFEFE"/>
        </svg>
        </button>
        {showRulesModal && <RulesModal onClose={handleCloseRules} />}
      </header>
    );
  };
  
  export default Header;
