import React from 'react';
import './index.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';

const ARVRPropertyDesign = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the contact us page
  };

  return (
    <div className="arvr-property-design-container">
      <header className="arvr-header">
        <h1>Proptelligence AR & VR in Property Design</h1>
        <p>Revolutionize your property design process with Proptelligence's cutting-edge AR & VR technology.</p>
      </header>

      <section className="design-overview">
        <h2>Transforming Property Design with AR/VR</h2>
        <div className="design-content">
          <div className="design-step">
            {/* <img src="path-to-arvr-design1-image.jpg" alt="Step 1" className="design-image" /> */}
            <h3>Step 1: Concept Visualization</h3>
            <p>
              Our AR/VR solutions allow you to visualize property designs in 3D before any physical work begins. 
              Experience your concepts in an immersive environment.
            </p>
          </div>

          <div className="design-step">
            {/* <img src="path-to-arvr-design2-image.jpg" alt="Step 2" className="design-image" /> */}
            <h3>Step 2: Interactive Design Adjustments</h3>
            <p>
              Make real-time adjustments to your designs and see immediate changes. Our VR technology provides 
              interactive tools to tweak layouts, colors, and materials seamlessly.
            </p>
          </div>

          <div className="design-step">
            {/* <img src="path-to-arvr-design3-image.jpg" alt="Step 3" className="design-image" /> */}
            <h3>Step 3: Client Collaboration</h3>
            <p>
              Collaborate with clients through virtual walkthroughs, allowing them to provide feedback and approve 
              designs before the project starts. Enhance client satisfaction with a clear, visual representation.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Benefits of AR/VR in Property Design</h2>
        <ul className="benefits-list">
          <li>Enhanced Visualization: See your designs in a realistic 3D environment.</li>
          <li>Efficient Design Process: Make quick adjustments and view results instantly.</li>
          <li>Improved Client Engagement: Engage clients with interactive design previews.</li>
          <li>Reduced Errors: Visualize and refine designs to minimize costly errors.</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>Experience the Future of Property Design with Proptelligence</h2>
        <p>Ready to elevate your design process with our AR/VR solutions? Contact us to schedule a demo or learn more about our innovative technology.</p>
        <button className="cta-button" onClick={handleContactClick}>Contact Us</button>
      </section>
    </div>
  );
};

export default ARVRPropertyDesign;
