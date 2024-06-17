import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import Cookies from 'js-cookie';
import "./index.css";

const cityImages = {
  Mumbai: 'https://img.freepik.com/premium-photo/taj-mahal-hotel_78361-4512.jpg',
  Delhi: 'https://img.freepik.com/premium-photo/india-gate-background-cloudy-sky-sightseeing-new-delhi-view-from-road_431724-6913.jpg',
  Bangalore: 'https://as2.ftcdn.net/v2/jpg/03/11/94/23/1000_F_311942374_cK69g8ORWymuDTy6CuuRd8LSGgy8l93D.jpg',
  Hyderabad: 'https://img.freepik.com/premium-vector/illustration-famous-indian-monument-charminar_674037-19.jpg',
  Kolkata: 'https://procaffenation.com/wp-content/uploads/2017/04/beautiful-view-of-howrah-bridge-at-evening-compressor.jpg',
  Chennai: 'https://img.freepik.com/premium-vector/chennai-skyline-detailed-silhouette-trendy-vector-illustration_668947-1201.jpg',
  Pune: 'https://www.tourmyindia.com/images/trimbakeshwar-shiva-temple-nashik1.jpg',
  Ahmedabad: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sheth_Hutheesinh_Temple.jpg/800px-Sheth_Hutheesinh_Temple.jpg',
};
const stateImages = {
  Telangana: 'https://www.euroschoolindia.com/wp-content/uploads/2023/07/telangana-formation-day-significance.jpg',
  Maharastra: 'https://as2.ftcdn.net/v2/jpg/05/00/41/27/1000_F_500412750_1TPS73JprcwKPr2aI9D55M8DJ1hOtiKy.jpg',
  Karnataka: 'https://www.karnatakatourism.org/wp-content/uploads/2022/02/Photos-Banner.jpg',
  Andrapradesh: 'https://i.pinimg.com/736x/1b/16/5e/1b165e9eeee66996b4d8e637b7e6cc4b.jpg',
  Tamilnadu: 'https://procaffenation.com/wp-content/uploads/2017/04/beautiful-view-of-howrah-bridge-at-evening-compressor.jpg',
  Kerala: 'https://img.freepik.com/premium-vector/chennai-skyline-detailed-silhouette-trendy-vector-illustration_668947-1201.jpg',
  Madyapradesh: 'https://www.tourmyindia.com/images/trimbakeshwar-shiva-temple-nashik1.jpg',
  Goa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sheth_Hutheesinh_Temple.jpg/800px-Sheth_Hutheesinh_Temple.jpg',
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [error, setError] = useState("");
  const [user, loading] = useAuthState(auth);
  const [showLoginContainer, setShowLoginContainer] = useState(false); // State to toggle between city list and login container
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
      const { data } = response;
      Cookies.set('jwt_token', data.token, {
        expires: 30,
        path: '/',
      });
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setShowSubmitError(true);
      setError(error.message);
    }
  };

  const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Pune"];
  const states = ["Telangana", "Maharastra", "Karnataka", "Andrapradesh", "Tamilnadu", "Kerala", "Madyapradesh", "Goa"];
  return (
    <div className="login">
      {!showLoginContainer ? (
        <div className="city-container">
          <div className="post-cont"> 
          <h2 className="select-city-heading">Select Your City</h2> 
          <button className="post-btn">Post Property <span className="free-btn-mo">Free</span></button>
            </div>
          <div className="city-list">
            {cities.map((city, index) => (
              <div key={index} className="city" onClick={() => setShowLoginContainer(true)}>
                <img src={cityImages[city]} alt={city} className="city-image" />
                <p className="city-name">{city}</p>
              </div>
            ))}
          </div>
          <h2 className="select-city-heading">Select Your State</h2> 
          <div className="city-list">
            {states.map((city, index) => (
              <div key={index} className="city" onClick={() => setShowLoginContainer(true)}>
                <img src={stateImages[city]} alt={city} className="state-image" />
                <p className="city-name">{city}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="cont">
          <div className="login__container">
            <h2 className="login-heading">Login</h2>
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
            {showSubmitError && <p className="error-message">*{error}</p>}
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
              <Link to="/login">Forgot Password</Link>
            </div>
            <p>
              Don't have an account? <Link to="/signup">Sign up </Link> now.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
