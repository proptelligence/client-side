import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 

function Navbottom() {
  

  return (
    <div className='navbottom-container'> 
      <div className='footer-container'> 
      <div className='footer-section'>
          <ul className='ui'>
          <h3>Company</h3>
          <li className='li-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='li-item'>
            <Link to='/aboutus'>About Us</Link>
          </li>
          <li className='li-item'> 
            <Link to='/legalservices'>Services</Link>
          </li> 
          <li className='li-item'> 
            <Link to='/tech'>Solutions</Link>
          </li>
          <li className='li-item'> 
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
        </div> 
        
        <div className='footer-section contact'>
        <h3>Legal</h3>
          <ul className='ui-legal'> 
          <li className='li-item'>
            <Link to='/proptelligence-terms&conditions'>Terms & Condition</Link>
          </li>
          <li className='li-item'>
            <Link to='/privacypolicy'>Privacy Policy</Link>
          </li>
          <li className='li-item'> 
            <Link to='/proptelligence-refund-policy'>Refund & Cancellation Policy</Link>
          </li>
        </ul>
        </div>   

        <div className='footer-section follow'>
        <div>
          <h3>Our Presence </h3>
            <p>We Work, Roshini Tech Hub, Mahadevapura ORR, Bengaluru, Karnataka 560037</p> 
          </div>
          <h3 className='follow-heading'>Social connect</h3>
          <ul className="social-media-cont">
            <li>
              <a href='https://www.facebook.com/profile.php?id=61558728524611' >
              <img
                src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" // Replace with the actual image URL
                alt="Facebook" className='social-img'
              />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/proptelligence' >
              <img
                src="https://img.freepik.com/premium-vector/instagram-icon-paper-cut-style-social-media-icons_505135-235.jpg" // Replace with the actual image URL
                alt="Instagram" className='social-img'
              />
              </a>
            </li>

            <li>
              <a href='https://www.youtube.com/proptelligence/' >
              <img
                src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg" // Replace with the actual image URL
                alt="LinkedIn" className='social-img'
              /> 
              </a>
            </li>
           
            <li>
              <a href='https://www.linkedin.com/company/proptelligence/' >
              <img
                src="https://img.freepik.com/premium-vector/linkedin-app-icon-world-s-largest-professional-network-social-networking-jobs-careers_277909-476.jpg" // Replace with the actual image URL
                alt="LinkedIn" className='social-img'
              /> 
              </a>
            </li> 
           
          </ul>
          <h3>info@proptelligence.net</h3>
        </div>
        <div className='app-download'>
            <h3>Download Our App</h3>
            <p>Find our app on the Indus App Store.</p>
            <p>Search for "Proptelligence" to download the app.</p>
            <a href='https://indusapp.store/3dn1n2ag' className='app-link'><img alt='Get it on Indus Appstore' 
            width={140} src='https://docstore.indusappstore.com/public/external/developerdashboard-static/badge-black-background-english.png'/>
            </a>
          </div>

      </div>
      <div className="copyright1">
        &copy; {new Date().getFullYear()} Proptelligence. All rights reserved.
      </div>
    </div>
  );
}

export default Navbottom;
