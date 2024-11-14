import React from 'react';
import '../CSS/Achievements.css';

const Achievements = () => {
  return (
    <div id="achievements"  className="achievements-container">
      <h2>Achievements</h2>
      <div className="achievement-card">
        <h3>Salutatorian Status</h3>
        <p>Awarded <strong>Salutatorian</strong> status at the college level for academic excellence and leadership.</p>
      </div>
      <div className="achievement-card">
        <h3>Best Team Award - TRYST 2018</h3>
        <p>Won the <strong>Best Team Award</strong> at TRYST 2018, IIT Delhi, for an impactful presentation on <strong>Big Data</strong>.</p>
      </div>
      <div className="achievement-card">
        <h3>Inter-college Cricket Championship</h3>
        <p>Member of the winning team in the <strong>Inter-college Cricket Championship</strong>, demonstrating teamwork and dedication.</p>
      </div>
      <div className="achievement-card">
        <h3>Tableau Desktop Specialist</h3>
        <p>Certified as a <strong>Tableau Desktop Specialist</strong>, showcasing skills in data visualization and analysis.</p>
      </div>
      <div className="achievement-card">
        <h3>Big Data Certification</h3>
        <p>Earned a <strong>Big Data Certification</strong> from Edifypath, enhancing expertise in handling and analyzing large datasets.</p>
      </div>
    </div>
  );
};

export default Achievements;
