import React from 'react';
import Navbar from '../Navbar';
import './index.css'

const Marketingteam = () => {
  const teamMembers = [
    { name: 'Sarwat Sayyed ', role: 'Digital Marketing Intern ', photo: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg' } 
  ];
  return (
      <> 
      <Navbar/>
      <div className='cont-team'>
        <div className="team-container">
      <h2>Meet Our Marketing Team</h2>
      <p className='team-sub'> Our Marketing Team is focused on crafting compelling campaigns and strategies to elevate our brand and connect with our audience in impactful ways.</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photo} alt={member.name} className="team-member-photo" /> 
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <a href="https://www.linkedin.com/in/sarwat-sayyed-036373303" target="_blank" rel="noopener noreferrer"> <img
                src="https://img.freepik.com/premium-vector/linkedin-app-icon-world-s-largest-professional-network-social-networking-jobs-careers_277909-476.jpg" 
                alt="LinkedIn" id='social-img-team'
              /> </a>
          </div>
        ))}
      </div>
        </div> 
      </div>
      </>
  );
};

export default Marketingteam;
