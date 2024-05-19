import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import "./index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [showSubmitError,setShowSubmitError] = useState(false)
  const [error,setError] = useState("")
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) navigate("/");
  }, [user, loading, navigate]);

  const loginWithApi = async () => {
    try {
      const response = await axios.post(
        "https://property-backend-1.onrender.com/login",
        {
          email: email,
          password: password
        }
      );
      console.log(response.data);
      navigate("/"); // Redirect to home page after successful login
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error here, maybe set an error state to display error message to the user
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login-heading">Login</h1>
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="login__btn" onClick={loginWithApi}>
          Login
        </button>
        <div className="row-lines">
          <hr width="120px" size="2"></hr>
          <p>OR</p>
          <hr width="120px" size="2"></hr>
        </div>
        <div className="social-buttons">
          <button className="google-button" onClick={signInWithGoogle}>
            <img
              src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703231079/R.27fa9f7a7ce6789c74f3679be56786c8_yfkeia.jpg"
              alt="Google Logo"
            />
            Login with Google
          </button>
        </div>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <p>
          Don't have an account? <Link to="/signup">Sign up </Link> now.
        </p>
      </div>
    </div>
  );
}

export default Login;
