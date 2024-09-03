import React from 'react';
import './index.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';

const IoTSolutionsPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the contact us page
  };

  return (
    <div className="iot-solutions-container">
      <header className="iot-header">
        <h1>Proptelligence's IoT Solutions</h1>
        <p>Revolutionize your building management, smart home living, and energy efficiency with Proptelligence’s advanced IoT technology.</p>
      </header>

      <section className="iot-solutions-overview">
        <h2>How Proptelligence's IoT Solutions Enhance Building Management</h2>
        <div className="iot-solutions-content">
          <div className="iot-solution-step">
            {/* <img src="path-to-smart-building-image.jpg" alt="Smart Building Management" className="iot-image" /> */}
            <h3>Smart Building Management</h3>
            <p>
            Proptelligence’s IoT solutions offer a comprehensive suite of technologies designed to transform your building into a smart, efficient environment. By integrating real-time monitoring and control, we enhance your operational efficiency and ensure cost savings.
            </p>
          </div>

          <div className="iot-solution-step">
            {/* <img src="path-to-smart-home-image.jpg" alt="Smart Home Solutions" className="iot-image" /> */}
            <h3>Smart Home Solutions</h3>
            <p>
              Transform your home into a smart haven with Proptelligence’s IoT technology. Easily control lighting, temperature, and security 
              systems via your smartphone or voice commands, ensuring a seamless and responsive living experience.
            </p>
          </div>

          <div className="iot-solution-step">
            {/* <img src="path-to-energy-efficiency-image.jpg" alt="Energy Efficiency" className="iot-image" /> */}
            <h3>Energy Efficiency</h3>
            <p>
              Optimize energy consumption with Proptelligence’s IoT sensors and analytics. Monitor real-time data to make informed decisions, 
              reduce waste, and achieve significant savings on your energy bills while contributing to sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Choose Proptelligence’s IoT Solutions?</h2>
        <ul className="benefits-list">
          <li>Enhanced Operational Efficiency: Streamline building operations with intelligent automation.</li>
          <li>Increased Comfort: Enjoy a personalized living environment with smart home integration.</li>
          <li>Cost Savings: Lower operational and energy costs through advanced monitoring and control.</li>
          <li>Sustainable Practices: Contribute to a greener future with efficient energy usage.</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>Discover the Future with Proptelligence</h2>
        <p>Ready to elevate your property management and living experience with Proptelligence’s IoT solutions? Contact us to learn more or schedule a demo.</p>
        <button className="cta-button" onClick={handleContactClick}>Contact Us</button>
      </section>
    </div>
  );
};

export default IoTSolutionsPage;
