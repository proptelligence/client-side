import React from 'react';
import Navbar from '../Navbar';
import './index.css'
import Navbottom from '../Navbottom';

function ProductLaunchMessage() {
  return (
    <>
    <Navbar/> 
    <div className="product-launch-message">
      <h2>We're Launching Soon!</h2>
      <p>Exciting new products are on their way. Stay tuned for updates.</p>
    </div> 
    
    </>
  );
}

export default ProductLaunchMessage;
