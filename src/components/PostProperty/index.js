// // PostProperty.js
// import React, { useState } from 'react';
// import Navbar from '../Navbar';

// import './index.css'; // Linking the CSS file

// const PostProperty = () => {

//   const [userType, setUserType] = useState('Owner');
//   const [purpose, setPurpose] = useState('');

//   const handleUserTypeClick = (type) => {
//     setUserType(type);
//   };

//   const handlePurposeClick = (purpose) => {
//     setPurpose(purpose);
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic for handling form submission
//   }; 

//   const handleGoogleLogin = () => {
//     // Functionality for handling Google login/authentication
//     // For example:
//     // googleAuth.signIn()
//     // .then((user) => {
//     //    // Handle user login
//     // })
//     // .catch((error) => {
//     //    // Handle error
//     // });
//   };

//   const handleFacebookLogin = () => {
   
//   };

//   const handleLinkedInLogin = () => {
   
//   };


//   const [clickedButton, setClickedButton] = useState('');



//   const handleButtonClick = (buttonName) => {
//     setClickedButton(buttonName);
//   };

//   return (
//     <>
//     <Navbar/> 
//     <div className="post-property-container">
//       <div className="text-and-image">
//         <h1>Post Property for Free</h1>
//         <img className='img101' src="https://img.freepik.com/premium-photo/property-buy-rent-concept-miniature-house-hand-pick-wooden-cube-with-text-buy-rent_577978-55.jpg" alt="Property" />
//       </div>
//       <div className="form-container">
//         <h3>Let's get you started</h3>
//         <form onSubmit={handleSubmit}>
//       <div className="user-type">
//         <p>You are:</p>
//         <button
//           className={userType === 'Owner' ? 'blue-button' : 'white-button'}
//           onClick={() => handleUserTypeClick('Owner')}
//         >
//           Owner
//         </button>
//         <button
//           className={userType === 'Agent' ? 'blue-button' : 'white-button'}
//           onClick={() => handleUserTypeClick('Agent')}
//         >
//           Agent
//         </button>
//         <button
//           className={userType === 'Builder' ? 'blue-button' : 'white-button'}
//           onClick={() => handleUserTypeClick('Builder')}
//         >
//           Builder
//         </button>
//       </div>
//       <div className="purpose">
//         <p>You are here to:</p>
//         <button
//           className={purpose === 'Buy' ? 'blue-button' : 'white-button'}
//           onClick={() => handlePurposeClick('Buy')}
//         >
//           Buy
//         </button>
//         <button
//           className={purpose === 'Sell' ? 'blue-button' : 'white-button'}
//           onClick={() => handlePurposeClick('Sell')}
//         >
//           Sell
//         </button>
//         <button
//           className={purpose === 'Rent' ? 'blue-button' : 'white-button'}
//           onClick={() => handlePurposeClick('Rent')}
//         >
//           Rent
//         </button>
//       </div>
//       <div className="contact-info">
//         <label>
//           Your contact number
//           <select>
//             <option value="IND">IND +91</option>
//             {/* Other country codes can be added */}
//           </select>
//           <input type="tel" placeholder="Enter your contact number" />
//         </label>
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </div> 
//       <div className="social-buttons">
//           <button className="google-button" onClick={handleGoogleLogin}>
//             <img src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703231079/R.27fa9f7a7ce6789c74f3679be56786c8_yfkeia.jpg" alt="Google Logo" />
//             Continue with Google
//           </button>
//           <button className="facebook-button" onClick={handleFacebookLogin}>
//             <img src="https://img.freepik.com/premium-photo/facebook-application-logo-3d-rendering-white-background_41204-6939.jpg" alt="Facebook Logo" />
//             Continue with Facebook
//           </button>
//           <button className="linkedin-button" onClick={handleLinkedInLogin}>
//             <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg" alt="X Logo" />
//             Continue with X
//           </button>
//         </div>
//     </form>

        
//       </div>
//     </div>
//     </>
//   );
// };

// export default PostProperty;


// src/PostProperty.js

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Property submitted:', property);
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
          <label htmlFor="poster">Who is Posting?</label>
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
          <label htmlFor="buildingType">Type of Building:</label>
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



