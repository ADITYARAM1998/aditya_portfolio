import React from 'react';
import profileImage from '../assets/profile-image.jpg';
import '../CSS/Profile.css';

const Profile = () => (
  <div id="home" className="profile-container"> {/* Added id="home" */}
    <div className="left-section">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h2 className="profile-name">Aditya Mallela</h2>
      <h3 className="profile-title">Software Engineer</h3>
      <div className="social-icons">
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/ADITYARAM1998" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/aditya-mallela-552284178/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <button className="download-btn">Download CV</button>
    </div>
    <div className="right-section">
      <div className="about-me-section">
        <h3 className="about-me-title">About Me</h3>
        <p className="about-me-text">
          "A skilled software engineer with expertise in frontend development, automation, and backend services.
          Experienced in healthcare and insurance domains, with extensive work in technologies such as Automation,
          React, Python, and Playwright, along with cloud and CI/CD tools like Azure and Jenkins."
        </p>
      </div>
      <div className="details">
        <div className="interests">
          <h3 className="section-title">Interests</h3>
          <ul className="interests-list">
            <li>Artificial Intelligence</li>
            <li>Automation</li>
            <li>Web Application Development</li>
          </ul>
        </div>
        <div className="education">
          <h3 className="section-title">Education</h3>
          <p>Masters in CS - University of Houston</p>
          <p>Bachelors in CS - JNTUH</p>
        </div>
      </div>
      {/* Contact Details Section */}
      <div className="contact-details">
        <h3 className="section-title">Contact Details</h3>
        <p>
          <i className="fas fa-envelope"></i> m.adityaram09@gmail.com
        </p>
        <p>
          <i className="fas fa-phone"></i> +1 682-298-5300
        </p>
      </div>
    </div>
  </div>
);

export default Profile;
