import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { load } from '@cashfreepayments/cashfree-js';

function App() {
  const [cashfree, setCashfree] = useState(null);
  const [orderId, setOrderId] = useState('');

  const initializeSDK = async () => {
    const cashfreeInstance = await load({ mode: 'prod' });
    setCashfree(cashfreeInstance);
  };

  useEffect(() => {
    initializeSDK();
  }, []);

  const getSessionId = async () => {
    try {
      const res = await axios.get('http://localhost:8000/payment');
      if (res.data && res.data.payment_session_id) {
        console.log(res.data);
        setOrderId(res.data.order_id);
        return res.data.payment_session_id;
      } else {
        throw new Error('Payment session ID not found');
      }
    } catch (error) {
      console.log('Error fetching session ID:', error);
      alert('Error fetching session ID');
    }
  };

  const verifyPayment = async (orderId) => {
    try {
      const res = await axios.post('http://localhost:8000/verify', { orderId });
      if (res && res.data) {
        alert('Payment verified');
      } else {
        throw new Error('Payment verification failed');
      }
    } catch (error) {
      console.log('Error verifying payment:', error);
      alert('Error verifying payment');
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const sessionId = await getSessionId();
      if (sessionId && cashfree) {
        const checkoutOptions = {
          paymentSessionId: sessionId,
          redirectTarget: '_modal',
        };
        cashfree.checkout(checkoutOptions).then((res) => {
          console.log('Payment initialized');
          verifyPayment(orderId);
        }).catch(error => {
          console.log('Error during payment initialization:', error);
          alert('Error during payment initialization');
        });
      } else {
        throw new Error('Session ID or Cashfree instance is missing');
      }
    } catch (error) {
      console.log('Error handling click:', error);
      alert('Error initializing payment');
    }
  };

  return (
    <div className="card">
      <button onClick={handleClick}>Pay now</button>
    </div>
  );
}

export default App;
