import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { auth, signInWithGoogle } from "../../firebase";
import "./index.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = async () => {
    try {
      const response = await axios.post(
        "https://property-backend-1.onrender.com/register",
        {
          name: name,
          email: email,
          password: password
        }
      );
      console.log("Registration successful:", response.data);
      // Redirect to home page or any other desired route upon successful registration
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration error here, e.g., display error message to the user
    }
  };
  

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <div className="register"> 
      <div className="register__container"> 
        <h1 className="signup-heading">Sign Up</h1>
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Sign Up
        </button> 
        <div className='row-lines'>
          <hr width="120px" size="2"></hr> 
          <p>OR</p>
          <hr width="120px" size="2"></hr> 
        </div>
        <div className='social-buttons'>
          <button className='google-button'  onClick={signInWithGoogle}>
            <img
              src='https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703231079/R.27fa9f7a7ce6789c74f3679be56786c8_yfkeia.jpg'
              alt='Google Logo'
            />
            Continue with Google
          </button>
        </div>

        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Register;
