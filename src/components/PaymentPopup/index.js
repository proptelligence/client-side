import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './index.css';
import logo from '../../components/Assets/logo.jpg';

const PaymentPopup = ({ amount, onClose }) => {
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [showQR, setShowQR] = useState(false);

  const upiId = "proptelligencetech@sbi"; 

  const handlePay = () => {
    setShowQR(true);
  };

  return (
    <div className="payment-popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        {showQR ? (
          <div className="qr-container">
            <div className="qr-header">
              <img src={logo} alt="Proptelligence Logo" className="logo-qr" />
              <h3>Pay with Proptelligence secure QR Scan</h3>
            </div>
            <QRCode value={`upi://pay?pa=${upiId}&pn=Proptelligence&am=${amount}&cu=INR`} />
            <p className="amount">Total Amount: ₹{amount}</p>
          </div>
        ) : (
          <>
            <img src={logo} alt="Proptelligence Logo" className="logo" />
            <p className="amount">Total Amount: ₹{amount}</p> 
            <h2 className='d'>Enter Your Details</h2>
            <input 
              type="text" 
              placeholder="Enter your mobile number" 
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input 
              type="email" 
              placeholder="Enter your email (optional)" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handlePay}>Proceed to Pay</button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentPopup;
