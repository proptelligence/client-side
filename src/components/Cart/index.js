import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import CashFree from '../CashFree';
import './index.css'; 

const Cart = () => {
  const [cart, setCart] = useState([]);

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
        <h1>Cart</h1>
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
            <CashFree />
          </>
        ) : (
          <div className='empty-container'>
            <div>
          <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"/> 
          <p>Your cart is empty</p> 
          <Link to="/legalservices"><button>Add Services</button></Link>
          </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
