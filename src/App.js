// App.js
import React from 'react';
import Profile from './components/Profile';
import SkillsetSidebar from './components/SkillsetSidebar';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Teaching from './components/Teaching';
import Header from './components/Header';
import Projects from './components/Projects';
import './CSS/App.css';

const App = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <SkillsetSidebar />
        <main className="main-content">
          <Profile />
          <Experience />
          <Projects />
          <Achievements />
          <Teaching />
        </main>
      </div>
    </>
  );
};

export default App;
