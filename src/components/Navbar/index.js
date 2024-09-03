import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown';
import DropdownS from '../DropdownS';
import DropdownC from '../DropdownC';
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
import Logo from '../../components/Assets/logo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [userName, setUserName] = useState('');
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [techDropdown, setTechDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState(localStorage.getItem('userName') || "");
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCompanyDropdownOpen, setMobileCompanyDropdownOpen] = useState(false); // New state for mobile Company dropdown
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');

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


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={Logo} alt="logo" className='website-logo' />
          <span className='company-name'>Proptelligence</span>
        </Link>
        <ul className="nav-menu">
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          {/* <li className="menus">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <Menu
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                />
              );
            })}
          </li> */}
          <li className="service-menu">
            <a href="#services-container" className="products-link">Services</a>
          </li>
          {/* <li className="menus">
            {menuItems1.map((menu, index) => {
              const depthLevel = 0;
              return (
                <Menu
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                />
              );
            })}
          </li> */}
          <li className="product-menu">
            <a href="#product-section" className="products-link">Products</a>
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
              Company <i className='fas fa-caret-down' />
            </Link>
            {companyDropdown && <DropdownC />}
          </li>
          <li className='whatsapp'>
            <div className="whatsapp-icon" onClick={toggleChat}>
              <FontAwesomeIcon icon={faWhatsapp}  color="#25D366" />
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
                <>
                  <p>Welcome {name} 👋</p>
                  <Link to='/cart'>
                    <p>My Services <i className='fas fa-shopping-cart' /><span className='cart-count'>{cartCount}</span></p>
                  </Link>
                  <button type="button" className="logout-desktop-btn" onClick={logout}>
                    Logout
                  </button>
                </>
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
              <li className="product-menu">
                <a href="#product-section" className="products-link">Products</a>
              </li>
              <li className="service-menu">
                <a href="#services-container" className="products-link">Services</a>
              </li>
              <li className='mobile-menu-link' onClick={toggleMobileCompanyDropdown}>
                <div className='nav-links'>
                  Company <i className='fas fa-caret-down' />
                </div>
                {mobileCompanyDropdownOpen && <DropdownC />}
              </li>
              <li className='whatsapp'>
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
          </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

