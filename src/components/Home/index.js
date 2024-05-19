import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbottom from '../Navbottom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../Navbar';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import './index.css';
import Popup from 'reactjs-popup';

const Home = () => {
  
  const [showPopup, setShowPopup] = useState(false); 
  const [signupSuccess, setSignupSuccess] = useState(false); 
  const [signupError, setSignupError] = useState(null); 

  const closePopup = () => {
    setShowPopup(false);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) {
      alert("Please enter name");
      return;
    }

    registerWithEmailAndPassword(name, email, password)
      .then(() => {
        setSignupSuccess(true); 
        setSignupError(null); 
      })
      .catch(error => {
        setSignupError(error.message); 
      });
  }; 

  const handleFacebookLogin = () => {
    // Implement Facebook login logic if needed
  }
  const blogData = [
    {
      title: "Free Property Listing Sites in India",
      imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1708941784/property-img_y0gn4h.png",
      content: "The real estate landscape in India is rapidly evolving, and with it, the way properties are bought and sold.The real estate landscape in India is rapidly evolving, and with it, the way properties are bought and sold",
      path: "/freepropertylist",
      datetime: "Feb 26, 2024",
    },
    {
      title: "India's Real State Sector in 2030",
      imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709380034/real_oa2n5a.png",
      content: "India's real estate sector is experiencing a remarkable transformation, poised for significant growth and contributing substantially to the nation's economic engine,and with it, the way properties are bought and sold",
      path: "/indiarealstate2023",
      datetime: "Feb 28, 2024",
    },
    {
      title: "The Ultimate Guide to Buying a Home Online: Tips and Tricks",
      imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
      content: "Owning a home is a dream for many, but navigating the traditional buying process can feel complex and overwhelming,brimming with potential for those...",
      path: "/buyahome",
      datetime: "March 03, 2024",
    },
    {
      title: "Get Legal Advice Easily with Proptelligence",
      imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1710069093/blog-4_hkn9cf.png",
      content: "In today's fast-paced world, navigating the intricacies of the legal system can be a daunting task, especially when challenges arise outside of traditional business hours.",
      path: "/legaladvice",
      datetime: "March 09, 2024",
    },{
      title: "Investing in Mumbai Real Estate",
      imageUrl: "https://res.cloudinary.com/dfbjizje6/image/upload/v1712567734/Picture1_nd0kxi.png",
      content: "Mumbai, India's bustling financial capital, has captivated investors for generations.  Mumbai real estate offers a dynamic and diverse landscape, brimming with potential for those seeking lucrative investment opportunities.",
      path: "/mumbai",
      datetime: "March 30, 2024",
    },
    {
      title: "Exploring the Real Estate Market: Pune Properties and Beyond",
      imageUrl: "https://res.cloudinary.com/dfbjizje6/image/upload/v1712592800/pune_hqifc2.png",
      content: "The local real estate market of Pune beats with energy and is thus characterised by a gorgeous and warm scenery for the potential investors and homeowners.",
      path: "/pune",
      datetime: "March 30, 2024",
    },{
      title: "Discovering Hidden Gems: Real Estate in Chennai",
      imageUrl: "https://res.cloudinary.com/dfbjizje6/image/upload/v1712592797/chennai_q05imq.png",
      content: "Chennai's real estate market offers a path to unexplored opportunities. The city centre is the main hub, but picturesque districts, each with its own peculiar demeanour and eventful history.",
      path: "/chennai",
      datetime: "March 30, 2024",
    },
    {
      title: "Discovering Hidden Gems: Real Estate in Chennai",
      imageUrl: "https://res.cloudinary.com/dfbjizje6/image/upload/v1712592797/chennai_q05imq.png",
      content: "Chennai's real estate market offers a path to unexplored opportunities. The city centre is the main hub, but picturesque districts, each with its own peculiar demeanour and eventful history.",
      path: "/chennai",
      datetime: "March 30, 2024",
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };


  useEffect(() => {
    if (loading) return;
    if (user) {
      navigate("/");
      closePopup(); 
    }
  }, [user, loading]);

  useEffect(() => {
    if (signupSuccess) {
      setShowPopup(true); 
    }
  }, [signupSuccess]);

  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Unlock Our Free Property Service</h1>
          <img
            src="https://img.freepik.com/premium-photo/house-growth-chart-real-estate-market-concept-generative-ai_609002-980.jpg"
            alt="clothes to be noticed"
            className="home-mobile-img"
          />

          <p className="home-description">
            Experience effortless property management with Proptelligence. With
            our free services, managing your properties has never been easier.
          </p> 
          <div className="popup-container">
            <Popup
              modal
              trigger={
                <button className="button-sign">Sign up For Free</button>
              }
              open={showPopup} 
              onClose={closePopup} 
            >
              {close => (
                <>
                  <div className="popup-header">
                    <button className="close-button" onClick={() => {
                      close();
                      setSignupSuccess(false); 
                      setSignupError(null); 
                    }}>
                      &times;
                    </button>
                  </div>
                  {signupSuccess && ( 
                    <div className="success-message">
                      <p>Signup successful! You can now access our free property services.</p>
                    </div>
                  )}
                  {!signupSuccess && ( 
                    <div className="error-message">
                      <p>{signupError}</p>
                    </div>
                  )}
                  {!signupSuccess && !signupError && ( 
                    <div className="register1"> 
                      <div className="register__container1"> 
                        <h1 className="signup-heading1">Sign Up</h1>
                        <input
                          type="text"
                          className="register__textBox1"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full Name"
                        />
                        <input
                          type="text"
                          className="register__textBox1"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="E-mail Address"
                        />
                        <input
                          type="password"
                          className="register__textBox1"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                        <button className="register__btn1" onClick={register}>
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
                  )}
                </>
              )}
            </Popup>
          </div>
        </div>
        <img
          src="https://img.freepik.com/premium-photo/house-growth-chart-real-estate-market-concept-generative-ai_609002-980.jpg"
          alt="dresses to be noticed"
          className="home-desktop-img"
        />
      </div> 
      <div className='content-section'>
        <h1>Get Free Real Estate Guidance & Secure 24/7 Legal Support</h1> 
        <p>Get expert guidance throughout your real estate journey, with a FREE consultation and access to our optional 24/7 legal support. Don't let legal worries slow you down.  Proptelligence empowers you with the resources
           and expertise you need to make informed decisions and navigate the real estate market with confidence.</p>
      </div>
      <div className="service-section">
        <h2 className="service-heading">Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <Link to="/prop">
              <img
                src="https://img.freepik.com/premium-vector/security-infests-house-agrees-isometric-illustration_18660-608.jpg"
                alt="Service 1"
                className="service-image"
              />
            </Link>
            <h2 className="heading-2">Property Management Services</h2>
            <p className="prop-text-service-description">
              At Proptelligence, we recognize the challenges faced by property
              owners and strive to provide innovative solutions tailored to
              their needs.
            </p>
          </div>
          <div className="service-item">
            <Link to="/legalservices">
              <img
                src="https://img.freepik.com/premium-photo/consultation-male-lawyer-business-woman-customer_28283-887.jpg"
                alt="Service 2"
                className="service-image"
              />
            </Link>

            <h2 className="heading-2">Legal Services</h2>
            <p className="prop-text-service-description">
              Navigating the legal complexities of real estate transactions can
              be daunting.
            </p>
          </div>
        </div>
      </div> 
      <h2 className="service-heading">Blogs</h2>
      <Slider {...settings} className='blog-section-home'>
        {blogData.map((blog, index) => (
          <div key={index} className='blogs-card-home'>
            <div className="blog-info">
              <div className="author-details">
              </div>
              <Link to={blog.path}>
                <img className="blog-image" src={blog.imageUrl} alt={blog.title} />
              </Link>
              <h2 className="blog-details-title-home">{blog.title}</h2>
              <p className="blog-content">{blog.content}</p>
            </div>
          </div>
        ))}
      </Slider>
      
      <footer>
        <Navbottom />
      </footer>
    </>
  );
};

export default Home;
