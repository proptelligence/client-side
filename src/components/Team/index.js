import React from 'react';
import Navbar from '../Navbar';
import './index.css'

const Team = () => {
  // Array containing team member data
  const teamMembers = [
    { name: 'Mahesh S Reddy', role: 'Co-Founder & CEO', profile: 'CEO Profile Description', photo: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg' },
    { name: 'Sr Advocate', role: 'Chief Legal Officer', profile: 'Legal Advisor Profile Description', photo: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg' },
    // Add more team members as needed
 
  ];

  return (
      <> 
      <Navbar/>
        <div className="team-container">
      <h2>Meet Our Team</h2>
      <p>Our dedicated team of professionals is here to revolutionize the real estate and legal industry.</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photo} alt={member.name} className="team-member-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.profile}</p> {/* Display profile description */}
          </div>
        ))}
      </div>
    </div>
      </>
  );
};

export default Team;
