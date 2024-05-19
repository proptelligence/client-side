import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if JWT token is present or any other authentication logic
    const token = localStorage.getItem('jwtToken'); // Example: Fetch JWT token from localStorage

    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return (
    <Route
      {...rest}
      element={authenticated ? <Component /> : <Navigate to="/" replace />}
    />
  );
};

export default ProtectedRoute;
