import React, { useState } from 'react';
import './index.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons from react-icons
import AR from '../../components/Assets/AR.jpg';
import VR from '../../components/Assets/VR.jpg';
import CAPTURE from '../../components/Assets/capture.jpeg';


const ARVRVirtualTour = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { title: "Step-1: Capture and Model", image: CAPTURE },
        { title: "Step-2: Immersive Virtual Tours", image: VR },
        { title: "Step-3: Augmented Reality Enhancements", image: AR }
    ];

    const handleContactClick = () => {
        navigate('/contact'); // Navigate to the contact us page
    };

    const handleNextStep = () => {
        setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    };

    const handlePrevStep = () => {
        setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
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
                        <img src={steps[currentStep].image} alt={`Step ${currentStep + 1}`} className="solution-image" />
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
                <h1>Benefits of Proptelligence's AR/VR Solution</h1>
                <ul className="benefits-list">
                    <li>Save Time: Streamlined property viewings reduce the need for physical visits.</li>
                    <li>Enhanced Engagement: Provide an interactive and engaging experience for potential buyers.</li>
                    <li>Accurate Visualization: View properties with accurate details and spatial understanding.</li>
                    <li>Accessible Anywhere: Enable virtual tours from anywhere, anytime, using various devices.</li>
                </ul>
            </section>

            <section className="cta-section">
                <h1>Get Started with Proptelligence</h1>
                <p>Ready to elevate your property listings with Proptelligence? Contact us to schedule a demo or get more information about our AR/VR solutions.</p>
                <button className="cta-button" onClick={handleContactClick}>Contact Us</button>
            </section>
        </div>
    );
};

export default ARVRVirtualTour;
