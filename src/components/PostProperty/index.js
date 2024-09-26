import React, { useState } from 'react';
import './index.css';

const PostProperty = () => {
  const [property, setProperty] = useState({
    title: '',
    description: '',
    price: 500000, // Default value for price
    location: '',
    images: [],
    poster: '',
    buildingType: '',
    bedrooms: '',
    bathrooms: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProperty({ ...property, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://prop-backend.onrender.com/api/post-property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
      });
  
      if (response.ok) {
        console.log('Property submitted successfully!');
        alert("Thank you for submitting your property details. Your submission is currently under review, and our team will reach out to you for further information or confirmation shortly. We appreciate your patience and look forward to assisting you.");
        // You can add further logic to reset the form or show a success message
      } else {
        console.error('Failed to submit property');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="property-container">
      <h2 className="property-heading">Post Your Property</h2>
      <form className="property-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Property Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={property.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={property.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price (₹):</label>
          <input
            type="range"
            id="price"
            name="price"
            min="100000"
            max="10000000"
            step="50000"
            value={property.price}
            onChange={handleChange}
            required
          />
          <span>₹{property.price.toLocaleString()}</span>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={property.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="poster">Posted as</label>
          <select
            id="poster"
            name="poster"
            value={property.poster}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="owner">Owner</option>
            <option value="agent">Agent</option>
            <option value="builder">Builder</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="buildingType">Type of Property</label>
          <select
            id="buildingType"
            name="buildingType"
            value={property.buildingType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="independent-house">Independent House</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="bedrooms">Bedrooms:</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={property.bedrooms}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bathrooms">Bathrooms:</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={property.bathrooms}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="images">Upload Images:</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleImageChange}
            multiple
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit Property</button>
      </form>
    </div>
  );
};

export default PostProperty;



