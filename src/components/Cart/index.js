import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.css';
import { Cashfree } from '../util'; // Importing Cashfree object from util.js

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [userDetails, setUserDetails] = useState({ id: '', name: '', email: '', phone: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
    setTotal(savedCart.reduce((acc, item) => acc + item.price, 0));
  }, []);

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setTotal(newCart.reduce((acc, item) => acc + item.price, 0));
  };

  const handlePayNow = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const generateCustomerId = () => {
    return `customer_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
  };

  const initiatePayment = async () => {
    const paymentData = {
      orderAmount: total,
      customerId: userDetails.id || generateCustomerId(),
      customerName: userDetails.name,
      customerEmail: userDetails.email,
      customerPhone: userDetails.phone,
    };

    try {
      const response = await fetch('https://paymentgateway-pd0x.onrender.com/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();

      if (data.paymentSessionId) {
        // Use the checkoutOptions to proceed with payment
        let checkoutOptions = {
          paymentSessionId: data.paymentSessionId, // Payment session id from the response
          returnUrl: 'https://www.proptelligence.net', // Update to deployed URL
        };

        // Initialize Cashfree checkout
        Cashfree.checkout(checkoutOptions).then(async function (result) {
          if (result.error) {
            alert(result.error.message); // Handle any error in the checkout process
          }
          if (result.redirect) {
            console.log('Redirection in process'); // If redirection is required
          }

          // Confirm payment after redirection
          const paymentConfirmResponse = await fetch('https://paymentgateway-pd0x.onrender.com/confirmPayment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ paymentSessionId: data.paymentSessionId }),
          });

          const confirmData = await paymentConfirmResponse.json();

          if (confirmData.success) {
            // Mark services as purchased in the cart
            const updatedCart = cart.map((item) => ({ ...item, purchased: true }));
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            alert('Payment successful, services marked as purchased!');
          } else {
            alert('Payment failed. Please try again.');
          }
        });
      } else {
        alert('Failed to generate payment token');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Error initiating payment');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    initiatePayment(); // Call function to start payment
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
                  <span className="purchased-status">
                    {item.purchased ? 'Purchased' : <button onClick={() => removeFromCart(index)} className="remove-button">Remove</button>}
                  </span>
                </li>
              ))}
            </ul>
            <h2 className="indus-heading">Total: ₹{total}</h2>
            {!cart.some(item => item.purchased) && <button onClick={handlePayNow}>Pay now</button>}
          </>
        ) : (
          <div className="empty-container">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png" alt="Empty Cart" />
            <p>Your cart is empty</p>
            <Link to="/legalservices"><button>Add Services</button></Link>
          </div>
        )}
      </div>

      {/* Form for user details */}
      {showForm && (
        <div className="payment-form-container">
          <h2>Enter your details</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Proceed to Pay</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Cart;
