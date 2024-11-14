import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/SkillsetSidebar.css';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Web Development', level: 85 },
  { name: 'APIs', level: 80 },
  { name: 'Automation', level: 95 },
  { name: 'ReactJS', level: 75 },
  { name: 'Framework Design', level: 70 },
  { name: 'Playwright', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'TypeScript', level: 65 },
  { name: 'Machine Learning', level: 60 },
  { name: 'AI', level: 55 }
];

const SkillsetSidebar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="skillset-sidebar">
      <h3>Skillset</h3>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill" data-aos="fade-up" data-aos-duration="1000">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar-container">
              <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
            </div>
            <div className="skill-level">{skill.level}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsetSidebar;
