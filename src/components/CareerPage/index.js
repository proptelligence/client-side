import React, { useState } from 'react';
import './index.css'
import Navbar from '../Navbar';
import Navbottom from '../Navbottom';
const CareerPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Sales'];

  const jobs = [
    { id: 1, title: 'Software Engineer', department: 'Engineering' },
    { id: 2, title: 'UI/UX Designer', department: 'Design' },
    { id: 3, title: 'Digital Marketer', department: 'Marketing' },
    { id: 4, title: 'Sales Representative', department: 'Sales' },
    { id: 5, title: 'Full stack Developer', department: 'Engineering' },
    // Add more jobs here...
  ];

  const filteredJobs = selectedDepartment === 'All' ? jobs : jobs.filter(job => job.department === selectedDepartment);

  const handleApplyNow = (jobId) => {
    // Logic to handle applying for the job, e.g., redirect to application form
    console.log(`Applying for job with ID: ${jobId}`);
  };

  return (
    <>
    <Navbar/> 
    <div className='carrer-main-cont'>
    <div className="career-page">
      <h1>Join Our Team</h1>
      <div className="filter-tabs">
        {departments.map(department => (
          <button
            key={department}
            className={selectedDepartment === department ? 'active' : ''}
            onClick={() => setSelectedDepartment(department)}
          >
            {department}
          </button>
        ))}
      </div>
      <div className="job-list">
        {filteredJobs.map(job => (
          <div key={job.id} className="job">
            <div>
            <h3>{job.title}</h3>
            <p>Department: {job.department}</p>
            </div>
            <button onClick={() => handleApplyNow(job.id)}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
    </div>
    <Navbottom/>
    
    </>
  );
};

export default CareerPage;
