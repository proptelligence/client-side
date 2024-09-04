import React, { useState } from 'react';
import './index.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons
import CONCEPT from '../../components/Assets/concept.jpg';
import INTERACTIVE from '../../components/Assets/interactive.png';
import  CLIENT from '../../components/Assets/client.jpg';

const ARVRPropertyDesign = () => {
  const [currentStep, setCurrentStep] = useState(0); // State to manage current step
  const navigate = useNavigate(); // Initialize useNavigate

  const steps = [
    {
      title: "Step 1: Concept Visualization",
      img: CONCEPT // Replace with actual image paths
    },
    {
      title: "Step 2: Interactive Design Adjustments",
      img: INTERACTIVE // Replace with actual image paths
    },
    {
      title: "Step 3: Client Collaboration",
      img: CLIENT // Replace with actual image paths
    }
  ];

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : steps.length - 1));
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : 0));
  };

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
            <img src={steps[currentStep].img} alt={`Step ${currentStep + 1}`} className="design-image" />
            <h3>{steps[currentStep].title}</h3>
          </div>

          <div className="navigation-buttons">
            <button className="nav-button prev" onClick={handlePrevStep}>
              <FaArrowLeft />
            </button>
            <button className="nav-button next" onClick={handleNextStep}>
              <FaArrowRight />
            </button>
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
