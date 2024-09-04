import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import PaymentPopup from '../PaymentPopup';
import './index.css'; 

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Added state for showing PaymentPopup
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
    setTotal(savedCart.reduce((acc, item) => acc + item.price, 0)); // Calculate total
  }, []);

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setTotal(newCart.reduce((acc, item) => acc + item.price, 0)); // Update total
  };

  const handlePayNow = () => {
    setShowPaymentOptions(true);
  };

  const handlePaymentChoice = (method) => {
    if (method === 'card') {
      alert('Our card payment method is currently under maintenance. Please use the UPI payment option to complete your transaction. We apologize for the inconvenience and appreciate your understanding.');
      navigate('/cart');
    } else if (method === 'upi') {
      setShowPaymentOptions(false); // Hide options modal
      setShowPopup(true); // Show PaymentPopup
    }
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1>Services Cart</h1>
        {cart.length > 0 ? (
          <>
            <ul className="cart-list">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <span>{item.name} - ₹{item.price}</span>
                  <button onClick={() => removeFromCart(index)} className="remove-button">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h2 className="indus-heading">Total: ₹{total}</h2>
            <button onClick={handlePayNow}>Pay now</button>
          </>
        ) : (
          <div className="empty-container">
            <div>
              <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png" alt="Empty Cart" /> 
              <p>Your cart is empty</p> 
              <Link to="/legalservices"><button>Add Services</button></Link>
            </div>
          </div>
        )}
      </div>
      {showPaymentOptions && (
        <div className="payment-options-modal">
          <div className="payment-options-content">
            <h2>Select Payment Method</h2>
            <button onClick={() => handlePaymentChoice('card')}>Pay with Card</button>
            <button onClick={() => handlePaymentChoice('upi')}>Pay with UPI</button>
            <button onClick={() => setShowPaymentOptions(false)}>Cancel</button>
          </div>
        </div>
      )}
      {showPopup && (
        <PaymentPopup amount={total} onClose={() => setShowPopup(false)} /> // Pass total amount here
      )}
    </>
  );
};

export default Cart;
