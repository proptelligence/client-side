import React from 'react';
import Navbar from '../Navbar'; 
import Navbottom from '../Navbottom'
import './index.css';

const Team = () => {
  const leadershipTeam = [
    { name: 'MaheswaraReddy', role: 'Founder and CEO', profile: 'CEO Profile Description', photo: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg', linkedin: 'https://www.linkedin.com/in/mahesh-sm/'},
    { name: 'Sr Advocate', role: 'Chief Legal Officer', profile: 'Legal Advisor Profile Description', photo: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg',linkedin:'https://www.linkedin.com/ntadvocates/' },
    { name: 'Umadevi', role: 'Co-Founder', profile: 'Co-Founder Profile Description', photo: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg' }
  ];

  const engineeringTeam = [
    { name: 'Shreyas Patil', role: 'Software Developer Intern', photo: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg', linkedin: 'https://www.linkedin.com/in/shreyas-patil-sp002' },
    { name: 'Sparsh Rastogi', role: 'Full Stack Developer Intern', photo: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg', linkedin: 'https://www.linkedin.com/in/sparsh-rastogi-502313203' }
  ];

  const marketingTeam = [
    { name: 'Sarwat Sayyed ', role: 'Digital Marketing Intern ', photo: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg', linkedin: 'https://www.linkedin.com/in/sarwat-sayyed-036373303' }
  ];

  const renderTeam = (team, title) => (
    <div className="team-category">
      <h2>{title}</h2>
      <div className="team-members">
        {team.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photo} alt={member.name} className="team-member-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.freepik.com/premium-vector/linkedin-app-icon-world-s-largest-professional-network-social-networking-jobs-careers_277909-476.jpg"
                alt="LinkedIn"
                id='social-img-team'
                className='linkedin-icon'
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className='cont-team'>
        <div className="team-container">
          <h1>Meet Our Teams</h1>
          <p className='team-sub'>Our talented teams work together to drive success across different sectors.</p>
          
          {/* Leadership Team */}
          {renderTeam(leadershipTeam, "Leadership Team")}
          
          {/* Engineering Team */}
          {/* {renderTeam(engineeringTeam, "Engineering Team")} */}
          
          {/* Marketing Team */}
          {/* {renderTeam(marketingTeam, "Marketing Team")} */}
        </div>
      </div> 
      <Navbottom/>
    </>
  );
};

export default Team;
