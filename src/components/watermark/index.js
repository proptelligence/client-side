import React from 'react';
import Logo from '../../components/Assets/logo.png'; // Adjust the path to your logo
import './index.css';

const Watermark = () => {
  return (
    <div className="watermark">
      <img src={Logo} alt="watermark" className="watermark-logo" />
    </div>
  );
};

export default Watermark;
