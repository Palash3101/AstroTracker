import React from 'react';
import '../stylesheets/AboutUs.css';

const teamMembers = [
  { name: 'Alice Johnson', linkedin: 'https://linkedin.com/in/alicejohnson', github: 'https://github.com/alicejohnson' },
  { name: 'Bob Smith', linkedin: 'https://linkedin.com/in/bobsmith', github: 'https://github.com/bobsmith' },
  { name: 'Cathy Brown', linkedin: 'https://linkedin.com/in/cathybrown', github: 'https://github.com/cathybrown' },
  { name: 'David Lee', linkedin: 'https://linkedin.com/in/davidlee', github: 'https://github.com/davidlee' },
  { name: 'Eve Green', linkedin: 'https://linkedin.com/in/evegreen', github: 'https://github.com/evegreen' },
];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p className="about-description">
        We are a team of passionate developers dedicated to building innovative and user-friendly applications. Our goal is to solve real-world problems and bring impactful solutions to our users.
      </p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h2>{member.name}</h2>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
