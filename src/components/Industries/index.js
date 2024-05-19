import React from 'react';
import Navbottom from '../Navbottom'

import './index.css'
import Navbar from '../Navbar';

const Industries = () => 
 (
    <> 
    <Navbar/>
      <div className='main-cont'>
        <div className="industries-container">
          <h2>Industries</h2>
          <p>
            Property Technologies has worked with a range of industries including commercial real estate, residential real estate, hospitality, and healthcare. Our team has the experience and skills to develop innovative solutions for each industry, taking into account their specific requirements. We understand the importance of staying up-to-date on the latest trends and technologies, and use our expertise to ensure our clients are kept ahead of the competition.
          </p>
          <p>
            We have the capability to provide tailored, custom solutions for each industry, from cutting-edge mobile applications to cloud-based property management software.
          </p>
          <p>
            Our goal is to help you maximize efficiency and increase your ROI. With Property Technologies, you can rest assured that your project is in the right hands.
          </p>
          <div className="industries-row-tech">
            <div className="industry-item">
              <img src="https://static.wixstatic.com/media/a3c153_749eb800f1a64c549de4e7acff06d1bb~mv2.jpg/v1/crop/x_936,y_0,w_3744,h_3744/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/alex-mNJ7c7-XCZQ-unsplash.jpg" alt="Real Estate" />
              <p>Real Estate</p>
            </div>
            <div className="industry-item">
              <img src="https://static.wixstatic.com/media/11062b_ddb09609a7b04f8f9a9c7cf1ee5d126c~mv2.jpeg/v1/crop/x_816,y_0,w_3264,h_3264/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Reviewing%20Legal%20Agreement.jpeg" alt="Legal" />
              <p>Legal</p>
            </div>
    
          </div>
        </div>
      </div> 
      <Navbottom/>
    </>
  );


export default Industries;
