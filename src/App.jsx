import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserProfileCard from './components/UserProfileCard';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('profile');

  const renderContent = () => {
    switch (currentView) {
      case 'login':
        return <LoginForm />;
      case 'register':
        return <RegistrationForm />;
      default:
        return <UserProfileCard />;
    }
  };

  return (
    <div className="app">
      <Header 
        title="Encora Inc" 
        onViewChange={setCurrentView}
        currentView={currentView}
      />
      <main className="main-content">
        <div className="container">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;