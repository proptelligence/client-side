import React, { useState } from 'react';
import Navbottom from '../Navbottom';
import Navbar from '../Navbar';
import './index.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://property-backend-1.onrender.com/contact/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setShowSuccessMessage(true);
        console.log('Email sent successfully!');
        setFormData({
          name: '',
          mobileNumber: '',
          email: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setShowErrorMessage(true);
        console.error('Failed to send email');
      }
    } catch (error) {
      setSubmitStatus('error');
      setShowErrorMessage(true);
      console.error('Error sending email:', error);
    }
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  const handleCloseErrorMessage = () => {
    setShowErrorMessage(false);
  };

  return (
    <> 
    <Navbar/>
    
    <div className="cont1"> 
      <div className="contact-us-container">
        <div className="contact-info"> 
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.133122814258!2d77.699657!3d12.963731299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13ab1884f719%3A0xd72102ad7e3b3947!2sWeWork!5e0!3m2!1sen!2sin!4v1648895132407!5m2!1sen!2sin"
            width="450"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>  
          <div className="address-details">
            <h2>Address </h2>
            <p>We Work, Roshini Tech Hub, Anand Nagar, Aswath Nagar, Chinnapanna Halli, Bengaluru, Karnataka 560037</p> 
            <p>connect@proptelligence.net</p>
          </div>
          <p>
            Feel free to get in touch with us. We are here to assist you with
            any inquiries or concerns you may have.
          </p>
        </div>
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>

          {showSuccessMessage && (
            <div className="popup success-popup">
              <p>Message sent successfully!</p>
              <button onClick={handleCloseSuccessMessage}>Close</button>
            </div>
          )}

          {showErrorMessage && (
            <div className="popup error-popup">
              <p>Oops! Something went wrong. Please try again later.</p>
              <button onClick={handleCloseErrorMessage}>Close</button>
            </div>
          )}
        </div>
      </div> 
      
    </div> 
   
    <Navbottom/>
    </>
  );
};

export default ContactUs;
