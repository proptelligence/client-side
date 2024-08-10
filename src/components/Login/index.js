// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./index.css";
// import Gurugram from '../../components/Assets/Gurugram.jpg';
// import Patna from '../../components/Assets/Patna.jpg';
// import Assam from '../../components/Assets/Assam.jpg';
// import Bihar from '../../components/Assets/Bihar.jpg';
// import Chattisgarh from '../../components/Assets/Chattisgarh.jpg';
// import Gujarat from '../../components/Assets/Gujarat.jpg';
// import Haryana from '../../components/Assets/Haryana.jpg';
// import leftarrow from '../../components/Assets/left-arrow.svg';
// import rightarrow from '../../components/Assets/right-arrow.svg';

// const cityImages = {
//   Mumbai: 'https://img.freepik.com/premium-photo/taj-mahal-hotel_78361-4512.jpg',
//   Delhi: 'https://img.freepik.com/premium-photo/india-gate-background-cloudy-sky-sightseeing-new-delhi-view-from-road_431724-6913.jpg',
//   Bangalore: 'https://as2.ftcdn.net/v2/jpg/03/11/94/23/1000_F_311942374_cK69g8ORWymuDTy6CuuRd8LSGgy8l93D.jpg',
//   Hyderabad: 'https://img.freepik.com/premium-vector/illustration-famous-indian-monument-charminar_674037-19.jpg',
//   Kolkata: 'https://procaffenation.com/wp-content/uploads/2017/04/beautiful-view-of-howrah-bridge-at-evening-compressor.jpg',
//   Chennai: 'https://img.freepik.com/premium-vector/chennai-skyline-detailed-silhouette-trendy-vector-illustration_668947-1201.jpg',
//   Pune: 'https://www.tourmyindia.com/images/trimbakeshwar-shiva-temple-nashik1.jpg',
//   Ahmedabad: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sheth_Hutheesinh_Temple.jpg/800px-Sheth_Hutheesinh_Temple.jpg',
//   Gurugram: Gurugram,
//   Patna: Patna
// };

// const stateImages = {
//   Telangana: 'https://www.euroschoolindia.com/wp-content/uploads/2023/07/telangana-formation-day-significance.jpg',
//   Maharastra: 'https://as2.ftcdn.net/v2/jpg/05/00/41/27/1000_F_500412750_1TPS73JprcwKPr2aI9D55M8DJ1hOtiKy.jpg',
//   Karnataka: 'https://www.karnatakatourism.org/wp-content/uploads/2022/02/Photos-Banner.jpg',
//   Andrapradesh: 'https://i.pinimg.com/736x/1b/16/5e/1b165e9eeee66996b4d8e637b7e6cc4b.jpg',
//   Tamilnadu: 'https://procaffenation.com/wp-content/uploads/2017/04/beautiful-view-of-howrah-bridge-at-evening-compressor.jpg',
//   Kerala: 'https://img.freepik.com/premium-vector/chennai-skyline-detailed-silhouette-trendy-vector-illustration_668947-1201.jpg',
//   Madyapradesh: 'https://www.tourmyindia.com/images/trimbakeshwar-shiva-temple-nashik1.jpg',
//   Goa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sheth_Hutheesinh_Temple.jpg/800px-Sheth_Hutheesinh_Temple.jpg',
//   Assam: Assam,
//   Bihar: Bihar,
//   Chattisgarh: Chattisgarh,
//   Gujarat: Gujarat,
//   Haryana: Haryana
// };

// const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Pune", "Gurugram", "Patna"].sort();
// const states = ["Telangana", "Maharastra", "Karnataka", "Andrapradesh", "Tamilnadu", "Kerala", "Madyapradesh", "Goa", "Assam", "Bihar", "Chattisgarh", "Gujarat", "Haryana"].sort();

// const Login = () => {
//   const [cityIndex, setCityIndex] = useState(0);
//   const [stateIndex, setStateIndex] = useState(0);
//   const navigate = useNavigate();

//   const handleCityNext = () => {
//     if (cityIndex < cities.length - 8) {
//       setCityIndex(cityIndex + 1);
//     }
//   };

//   const handleCityPrev = () => {
//     if (cityIndex > 0) {
//       setCityIndex(cityIndex - 1);
//     }
//   };

//   const handleStateNext = () => {
//     if (stateIndex < states.length - 8) {
//       setStateIndex(stateIndex + 1);
//     }
//   };

//   const handleStatePrev = () => {
//     if (stateIndex > 0) {
//       setStateIndex(stateIndex - 1);
//     }
//   };

//   const handleCityClick = () => {
//     navigate('/home');
//   };

//   const handleStateClick = () => {
//     navigate('/home');
//   };

//   return (
//     <div className="city-container">
//       <div className="post-cont">
//         <h2 className="select-city-heading">Select Your City</h2>
//       </div>
//       <div className="arrow-container">
//         <img
//           src={leftarrow}
//           alt="left arrow"
//           className={`arrow ${cityIndex === 0 ? "disabled" : ""}`}
//           onClick={handleCityPrev}
//         />
//         <div className="city-list">
//           {cities.slice(cityIndex, cityIndex + 8).map((city, index) => (
//             <div
//               key={index}
//               className="city"
//               onClick={handleCityClick}
//             >
//               <img src={cityImages[city]} alt={city} className="city-image" />
//               <p className="city-name">{city}</p>
//             </div>
//           ))}
//         </div>
//         <img
//           src={rightarrow}
//           alt="right arrow"
//           className={`arrow ${cityIndex >= cities.length - 8 ? "disabled" : ""}`}
//           onClick={handleCityNext}
//         />
//       </div>
//       <h2 className="select-state-heading">Select Your State</h2>
//       <div className="arrow-container">
//         <img
//           src={leftarrow}
//           alt="left arrow"
//           className={`arrow ${stateIndex === 0 ? "disabled" : ""}`}
//           onClick={handleStatePrev}
//         />
//         <div className="state-list">
//           {states.slice(stateIndex, stateIndex + 8).map((state, index) => (
//             <div
//               key={index}
//               className="state"
//               onClick={handleStateClick}
//             >
//               <img src={stateImages[state]} alt={state} className="state-image" />
//               <p className="state-name">{state}</p>
//             </div>
//           ))}
//         </div>
//         <img
//           src={rightarrow}
//           alt="right arrow"
//           className={`arrow ${stateIndex >= states.length - 8 ? "disabled" : ""}`}
//           onClick={handleStateNext}
//         />
//       </div>
//     </div>
//   );
// };

// export default Login;

// src/pages/LoginPage.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import Cookies from 'js-cookie';
import "./index.css";  // Adjust path if necessary

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [error, setError] = useState("");
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

  return (
    <div className="login-page">
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
  );
}

export default Login;

