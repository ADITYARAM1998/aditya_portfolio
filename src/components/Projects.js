import React from 'react';
import '../CSS/Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Pharmacy Management System',
      description: 'A database application to manage pharmacy details, including pharmacists, medicines, and inventory.',
      technologies: ['ReactJS', 'MySQL', 'SQL Yog']
    },
    {
      title: 'Hawks Transport App',
      description: 'A mobile app for tracking shuttle services at the University of Houston Clear Lake. Built using Swift with Firebase as the backend.',
      technologies: ['Swift', 'Firebase']
    },
    {
      title: 'Office 365 Automation',
      description: 'Automated access to Excel files hosted on SharePoint, including handling MFA authentication using PowerShell and Azure AD.',
      technologies: ['PowerShell', 'Azure AD', 'Office 365']
    }
  ];

  return (
    <div className="projects-container" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
