// Header.js
import React from 'react';
import '../CSS/Header.css';

const Header = () => (
  <header className="header">
    <h1>Aditya's Portfolio</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a> {/* Link to #projects */}
      <a href="#achievements">Achievements</a>
      <a href="#teaching">Teaching</a>
    </nav>
  </header>
);

export default Header;
