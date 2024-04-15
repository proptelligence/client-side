import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (service) => {
    // Check if the service is already in the cart
    const isServiceInCart = cartItems.some(item => item.id === service.id);

    if (isServiceInCart) {
      // If service is already in cart, update quantity
      const updatedCartItems = cartItems.map(item =>
        item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If service is not in cart, add it
      setCartItems([...cartItems, { ...service, quantity: 1 }]);
    }
  };

  const removeFromCart = (serviceId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== serviceId);
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ${item.price * item.quantity}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${getTotalPrice()}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
