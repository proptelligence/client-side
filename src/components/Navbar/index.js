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

function Navbar() {
  const [userName, setUserName] = useState('');
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [techDropdown, setTechDropdown] = useState(false);
  const [companyDropdown, setcompanyDropdown] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const isLoggedIn = !!user;
  const [name, setName] = useState(localStorage.getItem('userName') || "");
  const navigate = useNavigate();
  const [click, setClick] = useState(false); // State for menu click
  const [cartCount, setCartCount] = useState(0); // State for cart count

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
    setCartCount(savedCart.length); // Update cart count on component mount
  }, []);

  const handleClick = () => setClick(!click); // Function to handle menu click
  const closeMobileMenu = () => setClick(false); // Function to close mobile menu

  const handleServicesHover = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(true);
      setTechDropdown(false);
      setcompanyDropdown(false)
    }
  };

  const handleCompanyHover = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(false);
      setTechDropdown(false);
      setcompanyDropdown(true)
    }
  };

  const handleTechHover = () => {
    if (window.innerWidth >= 960) {
      setTechDropdown(true);
      setServicesDropdown(false);
      setcompanyDropdown(false)
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(false);
      setTechDropdown(false);
      setcompanyDropdown(false)
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1702143803/rsz_yaja_1_bn6fjb.jpg" alt="logo" className='website-logo'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className="nav-menu">

          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="menus">
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
          </li>

          <li className="menus">
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

          <li className='nav-item-3'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <div className='phone-container'>
                <span className='phone-icon'>&#128222;</span>
                <span className='phone-text'>8062181169</span>
              </div>
            </Link>
          </li>

        </ul>
        {
          <nav className='navbar'>
            <div className='menu-icon-nav' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            {click && (
              <div className='dropdown-menu-ham'>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <p>Welcome {name} 👋 </p>
                )}
                <Link to='/cart'>
                <p>My Services <i className='fas fa-shopping-cart'/><span className='cart-count'>{cartCount}</span></p> 
                </Link>
                 {/* Display cart count here */}
                {isLoggedIn ? (
                  <>
                    <button type="button" className="logout-desktop-btn" onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                    <>
                      <Link to="/login"> <button>Login</button></Link>
                    </>
                  )}
              </div>
            )}
          </nav>
        }
      </nav>
    </>
  );
}

export default Navbar;
