import React from 'react';
import '../CSS/Experience.css';

const Experience = () => {
  return (
    <div id="experience" className="experience-container">
      <h2>Experience</h2>
      <div className="experience-card">
        <h3>Intern Developer</h3>
        <p className="company">LACERA | June 2024 - Present</p>
        <ul>
          <li>Developed automation scripts using <strong>Playwright</strong> for My Portal and Member Services Workspace applications.</li>
          <li>Built backend services with <strong>Python</strong> and <strong>Django</strong> for API and user authentication.</li>
          <li>Configured CI/CD pipelines with <strong>Jenkins</strong> and <strong>Azure</strong> for automated deployments.</li>
          <li>Utilized <strong>JavaScript</strong>, <strong>Node.js</strong>, and <strong>React</strong> for frontend automation tasks.</li>
        </ul>
      </div>

      <div  className="experience-card">
        <h3>Graduate Teaching Assistant</h3>
        <p className="company">University of Houston-Clear Lake | Aug 2023 - May 2024</p>
        <ul>
          <li>Assisted in labs on computer systems and network administration.</li>
          <li>Guided students in <strong>Python</strong> programming and scripting.</li>
        </ul>
      </div>

      <div className="experience-card">
        <h3>Associate Software Engineer</h3>
        <p className="company">Legato Health Technologies | Feb 2022 - Dec 2022</p>
        <ul>
          <li>Developed RPA solutions using <strong>UiPath</strong> and <strong>Blue Prism</strong>.</li>
          <li>Conducted backend validation and testing using <strong>SQL</strong> and <strong>Python</strong> scripts.</li>
        </ul>
      </div>

      <div  className="experience-card">
        <h3>Program Analyst</h3>
        <p className="company">Anthem Inc. | Jan 2021 - Feb 2022</p>
        <ul>
          <li>Created and executed automated test cases using <strong>Selenium</strong> and <strong>Python</strong> for UI and backend validation.</li>
          <li>Developed SQL queries for data validation in Salesforce and healthcare databases.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
