import React from 'react';
import './index.css'; // Import your CSS file for styling
import {useNavigate } from 'react-router-dom';

const ARVRVirtualTour = () => {
    const navigate = useNavigate(); // Initialize useNavigate

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the contact us page
  };
  return (
    <div className="arvr-virtual-tour-container">
      <header className="arvr-header">
        <h1>Proptelligence AR & VR Solutions</h1>
        <p>Transform your property viewing experience with Proptelligence's advanced virtual tour technology.</p>
      </header>

      <section className="solution-overview">
        <h2>How Proptelligence's AR/VR Solution Works</h2>
        <div className="solution-content">
          <div className="solution-step">
            {/* <img src="path-to-arvr-step1-image.jpg" alt="Step 1" className="solution-image" /> */}
            <h3>Step 1: Capture and Model</h3>
            <p>
              Proptelligence captures high-quality 360-degree images and videos of your property and creates 
              detailed 3D models to ensure every corner is accurately represented.
            </p>
          </div>

          <div className="solution-step">
            {/* <img src="path-to-arvr-step2-image.jpg" alt="Step 2" className="solution-image" /> */}
            <h3>Step 2: Immersive Virtual Tours</h3>
            <p>
              Our VR solution offers immersive virtual tours that allow potential buyers to explore 
              properties as if they were physically present. Interact with the space and view every detail.
            </p>
          </div>

          <div className="solution-step">
            {/* <img src="path-to-arvr-step3-image.jpg" alt="Step 3" className="solution-image" /> */}
            <h3>Step 3: Augmented Reality Enhancements</h3>
            <p>
              Proptelligence's AR technology overlays digital information on real-world views, helping buyers 
              visualize how furniture and decor will look in the property.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Benefits of Proptelligence's AR/VR Solution</h2>
        <ul className="benefits-list">
          <li>Save Time: Streamlined property viewings reduce the need for physical visits.</li>
          <li>Enhanced Engagement: Provide an interactive and engaging experience for potential buyers.</li>
          <li>Accurate Visualization: View properties with accurate details and spatial understanding.</li>
          <li>Accessible Anywhere: Enable virtual tours from anywhere, anytime, using various devices.</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>Get Started with Proptelligence</h2>
        <p>Ready to elevate your property listings with Proptelligence? Contact us to schedule a demo or get more information about our AR/VR solutions.</p>
        <button className="cta-button" onClick={handleContactClick}>Contact Us</button>
      </section>
    </div>
  );
};

export default ARVRVirtualTour;
