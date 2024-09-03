import React from 'react';
import Navbar from '../Navbar';
import './index.css'

const Team = () => {
  const teamMembers = [
    { name: 'MaheswaraReddy', role: 'Founder and CEO', profile: 'CEO Profile Description', photo: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg' },
    { name: 'Sr Advocate', role: 'Chief Legal Officer', profile: 'Legal Advisor Profile Description', photo: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg' },
    { name: 'Umadevi', role: 'Co-Founder', profile: 'Co-Founder Profile Description', photo: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg' } 
  ];
  return (
      <> 
      <Navbar/>
      <div className='cont-team'>
        <div className="team-container">
      <h2>Meet Our Team</h2>
      <p className='team-sub'>Our dedicated team of professionals is here to revolutionize the real estate and legal industry.</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photo} alt={member.name} className="team-member-photo" /> 
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            {/* <a href="https://www.linkedin.com/in/mahesh-sm/" target="_blank" rel="noopener noreferrer"> <img
                src="https://img.freepik.com/premium-vector/linkedin-app-icon-world-s-largest-professional-network-social-networking-jobs-careers_277909-476.jpg" 
                alt="LinkedIn" id='social-img-team'
              /> </a> */}
          </div>
        ))}
      </div>
        </div> 
      </div>
      </>
  );
};

export default Team;
