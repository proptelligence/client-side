import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropdownS from '../DropdownS';
import DropdownC from '../DropdownC';
import DropdownA from '../DropdownA';
import Dropdown from '../Dropdown';
import { menuItems } from '../../menuItems';
import { menuItems1 } from '../../menuItems1';
import Menu from '../Menu';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import axios from 'axios'; // Import Axios for making HTTP requests
import Cart from "../Cart"; // Import Cart component
import Logo from '../../components/Assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Logo1 from "../../components/Assets/image.jpg"
import LogoWebm from '../Assets/logo.webm'

function Navbar() {
  const [userName, setUserName] = useState('');
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [techDropdown, setTechDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState(localStorage.getItem('userName') || "");
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCompanyDropdownOpen, setMobileCompanyDropdownOpen] = useState(false); // New state for mobile Company dropdown
  const [mobileSolutionsDropdownOpen, setMobileSolutionsDropdownOpen] = useState(false);
  const [mobileAboutDropdownOpen, setMobileAboutDropdownOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [dropdown, setDropdown] = useState(false);

  const whatsappNumber = '+918062181169'; // Replace with the company WhatsApp number

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const fetchUserName = async () => {
      if (user && !name) {
        try {
          const q = query(collection(db, "users"), where("uid", "==", user.uid));
          const doc = await getDocs(q);
          if (!doc.empty) {
            const data = doc.docs[0].data();
            setName(data.name);
            localStorage.setItem('userName', data.name);
          }
        } catch (err) {
          console.error(err);
          alert("An error occurred while fetching user data");
        }
      }
    };

    fetchUserName();
  }, [user, name]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(savedCart.length);
  }, []);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleMobileCompanyDropdown = () => {
    setMobileCompanyDropdownOpen(!mobileCompanyDropdownOpen);
  };
  const handleCompanyHover = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(false);
      setTechDropdown(false);
      setCompanyDropdown(true);
    }
  };
  const handleMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(false);
      setTechDropdown(false);
      setCompanyDropdown(false);
    }
  };

  const toggleMobileSolutionsDropdown = () => {
    setMobileSolutionsDropdownOpen(!mobileSolutionsDropdownOpen);
  };

  const handleSolutionsHover = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(false);
      setTechDropdown(false);
      setSolutionsDropdown(true);
    }
  };
  const handleSolutionsLeave = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(false);
      setTechDropdown(false);
      setSolutionsDropdown(false);
    }
  };

  const toggleMobileAboutDropdown = () => {
    setMobileAboutDropdownOpen(!mobileAboutDropdownOpen);
  };

  const handleAboutHover = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(false);
      setTechDropdown(false);
      setAboutDropdown(true);
    }
  };
  const handleAboutLeave = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(false);
      setTechDropdown(false);
      setAboutDropdown(false);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
      <video className='website-logo' autoPlay muted loop>
            <source src={LogoWebm} type="video/webm" />
            Your browser does not support the video tag.
        </video>
    <div className='company-info'>
        <span className='company-name'>Proptelligence</span>
        <span className='slogan'>The Power of Data in Real World Intelligence</span>
    </div>
</Link>

        <ul className="nav-menu">
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={handleSolutionsHover}
            onMouseLeave={handleSolutionsLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Solutions <i className='fas fa-caret-down' />
            </Link>
            {solutionsDropdown && <DropdownS />}
          </li>


          <li
            className='nav-item'
            onMouseEnter={handleCompanyHover}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Who we are  <i className='fas fa-caret-down' />
            </Link>
            {companyDropdown && <DropdownC />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={handleAboutHover}
            onMouseLeave={handleAboutLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              What we do  <i className='fas fa-caret-down' />
            </Link>
            {aboutDropdown && <DropdownA />}
          </li>
          <li
        className='nav-item'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Contact Us link */}
        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
          Contact Us <i className='fas fa-caret-down' /> {/* Dropdown icon */}
        </Link>

        {/* Show dropdown when hovered */}
        {dropdown && <Dropdown />}
      </li>
        </ul>

        <div className='navbar-right'>
          <div className='menu-icon-nav' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-user-circle'} />
          </div>
          {click && (
            <div className='dropdown-menu-ham'>
              {loading ? (
                <p>Loading...</p>
              ) : user ? (
                <div className='userinfo'>
          <p>Welcome {name} 👋</p>
          <Link to='/cart'>
            <p>My Services <i className='fas fa-shopping-cart' /><span className='cart-count'>{cartCount}</span></p>
          </Link>
          <button type="button" className="logout-desktop-btn" onClick={logout}>
            Logout
          </button>
        </div>
              ) : (
                <Link to="/login">
                  <button>Login</button>
                </Link>
              )}
            </div>
          )}
        </div>

        <div className='mobile-menu-icon' onClick={toggleMobileMenu}>
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        {mobileMenuOpen && (
          <div className='mobile-menu-dropdown'>
            <ul className='mobile-menu-items'>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='mobile-menu-link' onClick={toggleMobileSolutionsDropdown}>
                <div className='nav-links'>
                  Solutions 
                </div>
                {mobileSolutionsDropdownOpen && <DropdownS />}
              </li>
              <li className='mobile-menu-link' onClick={toggleMobileCompanyDropdown}>
                <div className='nav-links'>
                  Who we are  
                </div>
                {mobileCompanyDropdownOpen && <DropdownC />}
              </li>
              <li className='mobile-menu-link' onClick={toggleMobileAboutDropdown}>
                <div className='nav-links'>
                  What we do  
                </div>
                {mobileAboutDropdownOpen && <DropdownA />}
              </li>
              {/* <li className='whatsapp'>
            <div className="whatsapp-icon" onClick={toggleChat}>
              <FontAwesomeIcon icon={faWhatsapp} size='2x'  color="#25D366" />
            </div>
            {isChatOpen && (
              <div className="whatsapp-chatbox">
                <div className="chatbox-header">
                  <span>Chat with Us</span>
                  <button onClick={toggleChat} className="close-chatbox">&times;</button>
                </div>
                <div className="chatbox-body">
                  <textarea
                    rows="3"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="chatbox-footer">
                  <button onClick={sendMessage} className="send-button">
                    <FontAwesomeIcon icon={faPaperPlane} /> Send
                  </button>
                </div>
              </div>
           )}
          </li> */}
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

