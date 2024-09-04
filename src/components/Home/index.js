import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase"; // Adjust the path according to your project structure
import Cookies from 'js-cookie'
import Navbottom from '../Navbottom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../Navbar';
import { Helmet } from 'react-helmet';
import { registerWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import './index.css';
import popup from '../../components/Assets/popup.jpg'
import AI from "../../components/Assets/ai.jpg";
import ARVR from '../../components/Assets/arandvr.jpg';
import IoT from '../../components/Assets/iot.jpg';
import TECH from '../../components/Assets/tech.jpg'
import Popup from 'reactjs-popup';
import Legalservice from '../../components/Assets/legalservices.png'
import Propertyservice from '../../components/Assets/propertyservice.png'
import Propvaluation from '../../components/Assets/propvaluation.png'
import Propbot from '../../components/Assets/propbot.png';
import PropAutomatedPropertyManagement from '../../components/Assets/PropAutomatedpropertyManagement.png'
import PropLegal from '../../components/Assets/proplegal.png';
import PropLytics from '../../components/Assets/proplytics.png'
import Propvirtualtour from '../../components/Assets/propvirtualtour.png';
import Propvirtualdesign from '../../components/Assets/propvirtualdesign.png';
import Smart from '../../components/Assets/smart.png';
import Smarthome from '../../components/Assets/smarthome.png';
import Energyefficiency from '../../components/Assets/energyefficiency.png';



const Home = () => {
  const [showPopup, setShowPopup,] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [popupOptions, setPopupOptions] = useState([]);
  const [isOptionsPopupOpen, setIsOptionsPopupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const whatsappNumber = '+918062181169'; // Replace with the company WhatsApp number

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');

    if (!hasSeenPopup) {
      setShowPopup(true);
      sessionStorage.setItem('hasSeenPopup', 'true');
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleProductClick = (product) => {
    if (!user && !jwtToken) {
      alert('Please login to access products');
      navigate('/login');
    } else {
      setSelectedProduct(product);
      switch (product) {
        case 'AI':
          setPopupOptions([
            { imageUrl: Propvaluation, heading: 'PropValuation' },
            { imageUrl: Propbot, heading: 'PropBot' },
            { imageUrl: PropAutomatedPropertyManagement, heading: 'PropAutomatedPropertyManagement' },
            { imageUrl: PropLegal, heading: 'PropLegal' },
            { imageUrl: PropLytics, heading: 'Propanalytics' }
          ]);
          break;
        case 'AR & VR':
          setPopupOptions([
            { imageUrl: Propvirtualtour, heading: 'Prop360 Virtual Tour' },
            { imageUrl: Propvirtualdesign, heading: 'Prop Virtual Design' }
          ]);
          break;
        case 'IoT':
          setPopupOptions([
            { imageUrl: Smart, heading: 'PropSmart Building Management' },
            { imageUrl: Smarthome, heading: 'Prop SmartHome' },
            { imageUrl: Energyefficiency, heading: 'Prop EnergyEfficeny' }
          ]);
          break;
        case 'TECH':
          navigate('/tech');
          break;
        default:
          setPopupOptions([]);
      }
      setIsOptionsPopupOpen(true);
    }
  };
  

  const handleOptionClick = (option) => {
    console.log(`Option clicked: ${option}`);
    switch (option) {
      case 'PropValuation':
        navigate('/Propvaluation');
        break;
      case 'PropBot':
        navigate('/Propbot');
        break;
      case 'PropAutomatedPropertyManagement':
        navigate('/PropAutomatedPropertyManagement');
        break;
      case 'Propanalytics':
        navigate('/propanalytics'); // Navigate to the page for AI
        break;
      case 'PropLegal':
        window.location.href = 'https://ntadvocates.in/';
        break;
      case 'Prop360 Virtual Tour':
        navigate('/virtualtour'); // Navigate to the page for AR & VR
        break;
      case 'Prop Virtual Design':
        navigate('/virtualdesign'); // Navigate to the page for AR & VR
        break;
      case 'PropSmart Building Management':
      case 'Prop SmartHome':
      case 'Prop EnergyEfficeny':
        navigate('/iotsolutions'); // Navigate to the page for IoT
        break;
      default:
        break;
    }
    setSelectedOption(null); // Close the popup after navigation
  };

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [selectedCity, setSelectedCity] = useState('Bengaluru');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact'); // Navigate to the contact page
  };
  
  
    
  
  const [user] = useAuthState(auth);

  const cityImages = {
    Bengaluru: 'https://res.cloudinary.com/ajaymedidhi7/image/upload/v1719286332/Bangalore_heatmap_nd32b0.png',
    Hyderabad: 'https://res.cloudinary.com/ajaymedidhi7/image/upload/v1719247247/HyderabadHeatmap_ft5rlf.png',
    Ahemadabad: 'https://res.cloudinary.com/ajaymedidhi7/image/upload/v1719285890/MicrosoftTeams-image_9_sgmb5u.png',
    Delhi : 'https://res.cloudinary.com/ajaymedidhi7/image/upload/v1719286002/MicrosoftTeams-image_11_jvudbu.png',
    kolkotha : 'https://res.cloudinary.com/ajaymedidhi7/image/upload/v1719286000/MicrosoftTeams-image_13_uqjmfm.png'
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const register = () => {
    if (!name) {
      alert("Please enter name");
      return;
    }

    // registerWithEmailAndPassword(name, email, password)
    //   .then(() => {
    //     setSignupSuccess(true); 
    //     setSignupError(null); 
    //   })
    //   .catch(error => {
    //     setSignupError(error.message); 
    //   });
  }; 

  const blogData = [
    {
      title: "Free Property Listing Sites in India",
      imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1708941784/property-img_y0gn4h.png",
      content: "The real estate landscape in India is rapidly evolving, and with it, the way properties are bought and sold.",
      path: "/freepropertylist",
      datetime: "Feb 26, 2024",
    },
    {
      title: "India's Real State Sector in 2030",
      imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709380034/real_oa2n5a.png",
      content: "India's real estate sector is experiencing a remarkable transformation, poised for significant growth and contributing substantially to the nation's economic engine.",
      path: "/indiarealstate2023",
      datetime: "Feb 28, 2024",
    },
    {
      title: "The Ultimate Guide to Buying a Home Online: Tips and Tricks",
      imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
      content: "Owning a home is a dream for many, but navigating the traditional buying process can feel complex and overwhelming.",
      path: "/buyahome",
      datetime: "March 03, 2024",
    },
    {
      title: "Get Legal Advice Easily with Proptelligence",
      imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1710069093/blog-4_hkn9cf.png",
      content: "In today's fast-paced world, navigating the intricacies of the legal system can be a daunting task, especially when challenges arise outside of traditional business hours.",
      path: "/legaladvice",
      datetime: "March 09, 2024",
    },
    {
      title: "Investing in Mumbai Real Estate",
      imageUrl: "https://res.cloudinary.com/dfbjizje6/image/upload/v1712567734/Picture1_nd0kxi.png",
      content: "Mumbai, India's bustling financial capital, has captivated investors for generations. Mumbai real estate offers a dynamic and diverse landscape, brimming with potential for those seeking lucrative investment opportunities.",
      path: "/mumbai",
      datetime: "March 30, 2024",
    },
    {
      title: "Exploring the Real Estate Market: Pune Properties and Beyond",
      imageUrl: "https://res.cloudinary.com/dfbjizje6/image/upload/v1712592800/pune_hqifc2.png",
      content: "The local real estate market of Pune beats with energy and is thus characterised by a gorgeous and warm scenery for the potential investors and homeowners.",
      path: "/pune",
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  const [jwtToken, setJwtToken] = useState(null);

  useEffect(() => {
    const token = Cookies.get('jwt_token'); 
    console.log(token)
    setJwtToken(token);
  }, []);

  const checkAuthAndNavigate = (path) => {
    console.log('User:', user);         // Debug: Check user state
  console.log('JWT Token:', jwtToken);
    if (!user && !jwtToken) {
      alert('Please login to access services')
      navigate('/login');
    } else{
      navigate(path)
    }
  };

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  }

  return (
    <>
    
      <Helmet> 
        <title>Proptelligence | PropTech Company in India | Online Legal Services</title>
        <meta name="Legal Services" content="Proptelligence is an AI-powered real estate and legal platform that helps agents, attorneys, and other real estate professionals find and procure properties." /> 
        <meta name="Property Services" content="Navigating the legal complexities of real estate transactions can be daunting. Proptelligence simplifies this process by offering tailored legal services to meet your needs." /> 
        <meta name="Industries" content="Property Technologies has worked with a range of industries including commercial real estate, residential real estate, hospitality, and healthcare." />
        <meta name="About us" content="At Proptelligence, we recognize the challenges faced by property owners and strive to provide innovative solutions tailored to their needs." />
        <meta name="msvalidate.01" content="D2A150396A7BEE21CE9769C5C3479F1C" />
        <meta name="google-site-verification" content="google154aa1c8bf93db82.html" />
      </Helmet>
      <Navbar />
      {showPopup && (
        <Popup open={showPopup} closeOnDocumentClick onClose={closePopup}>
          <div className="popup-content">
            <button className="close" onClick={closePopup}>&times;</button>
            <img className="popup-image" src={popup} alt="Welcome" />
            <h2>Welcome to Proptelligence!</h2>
            <p>Get expert guidance and secure legal support throughout your real estate journey.</p>
          </div>
        </Popup>
      )}
      {/* WhatsApp Icon */}
      

      
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Unlock Our Free Property Service</h1>
          <p className="home-description">
            Experience effortless property management with Proptelligence.
            With our free services, managing your properties has never been easier.
          </p>
          <button className="home-button" onClick={() => checkAuthAndNavigate('/select')}>
      Click Here
    </button>
        </div>
      </div>
        {/* <div className='service-heading-container'>
          <h1 className="service-heading">Trending Services</h1>
        </div>   */}
        <div id='services-container'>
          <h1 className="service-heading">Trending Services</h1>
          <div className="service-info-home">
              <img
              src={Propertyservice}
              alt="Property Services"
              className="service-image"
              onClick={() => checkAuthAndNavigate('/select')}
              />
              <h1 className="service-details-title-home">Property Services</h1>
              <p className="service-content">At Proptelligence, we recognize the challenges faced by property owners and strive to provide innovative solutions tailored to their needs.</p>
            </div> 
            <div className="service-info-home">
              <img
              src={Legalservice}
              alt="Legal Services"
              className="service-image"
              onClick={() => checkAuthAndNavigate('/legalservices')}
              />
              <h1 className="service-details-title-home">Legal Services</h1>
              <p className="service-content">Navigating the legal complexities of real estate transactions can be daunting. Proptelligence simplifies this process by offering tailored legal services to meet your needs.</p>
            </div> 
        </div>
      <div className="content-section">
        <div className="column">
          <p className="highlight">Free property services</p>
          <p className="details">7+ cities</p>
          <p className="details">31 states</p>
        </div>
        <div className="column">
          <p className="highlight">Products</p>
          <p className="details">15+</p>
        </div>
        <div className="column">
          <p className="highlight">Online legal services</p>
          <p className="details">10+</p>
        </div>
      </div>


      <div id="product-section">
        <h2 className="products-heading">Products</h2>
        <div className="products-row">
          <div className="product-column" onClick={() => handleProductClick('AI')}>
            <h3>AI</h3>
            <img src={AI} alt="AI" />
          </div>
          <div className="product-column" onClick={() => handleProductClick('AR & VR')}>
            <h3>AR & VR</h3>
            <img src={ARVR} alt="AR & VR" />
          </div>
          <div className="product-column" onClick={() => handleProductClick('IoT')}>
            <h3>IoT</h3>
            <img src={IoT} alt="IoT" />
          </div>
          {/* <div className="product-column" onClick={() => handleProductClick('TECH')}>
            <h3>TECH</h3>
            <img src={TECH} alt="TECH" />
          </div> */}
        </div>
      </div>
      {isOptionsPopupOpen && (
  <Popup open={isOptionsPopupOpen} closeOnDocumentClick onClose={() => setIsOptionsPopupOpen(false)}>
    <div className="options-popup">
      <h3>{selectedProduct}</h3>
      <ul>
        {popupOptions.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option.heading)} className="popup-option-item">
            <img src={option.imageUrl} alt={option.heading} className="popup-option-image" />
            <span className="popup-option-heading">{option.heading}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => setIsOptionsPopupOpen(false)} className="close-options-popup">&times;</button>
    </div>
  </Popup>
)}

      <h2 className="blog-heading">Blogs</h2>
      <Slider {...settings} className='blog-section-home'>
        {blogData.map((blog, index) => (
          <div key={index} className='blogs-card-home'>
            <div className="blog-info">
              <div className="author-details"></div>
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