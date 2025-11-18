import React from 'react';

const Header = ({ title = "Encora Inc", onViewChange, currentView }) => {
  return (
    <header className="header">
      <h1>Encora Inc</h1>
      <div className="nav-buttons">
        <button 
          className={`nav-btn ${currentView === 'profile' ? 'active' : ''}`}
          onClick={() => onViewChange('profile')}
        >
          Profile
        </button>
        <button 
          className={`nav-btn ${currentView === 'login' ? 'active' : ''}`}
          onClick={() => onViewChange('login')}
        >
          Login
        </button>
        <button 
          className={`nav-btn ${currentView === 'register' ? 'active' : ''}`}
          onClick={() => onViewChange('register')}
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;