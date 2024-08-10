import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import PaymentPopup from '../PaymentPopup';
import './index.css'; 

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1> Services Cart</h1>
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
            <h2 className='indus-heading'>Total: ₹{total}</h2>
            <button onClick={() => setShowPopup(true)}>Pay now</button>
          </>
        ) : (
          <div className='empty-container'>
            <div>
              <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png" alt="Empty Cart" /> 
              <p>Your cart is empty</p> 
              <Link to="/legalservices"><button>Add Services</button></Link>
            </div>
          </div>
        )}
      </div>
      {showPopup && <PaymentPopup amount={total} onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Cart;
