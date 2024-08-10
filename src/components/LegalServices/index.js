import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import TitleSearch from '../TitleSearch'; 
import Drafting from '../Drafting'; 
import SignUp from '../SignUp'; 
import CashFree from '../CashFree';
import { auth } from '../../firebase'; 
import Navbar from '../Navbar';

const LegalServices = () => {
  const [user, setUser] = useState(auth.currentUser); 
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const serviceRef = useRef(null); 
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleServiceSelect = (serviceName) => {
    setSelectedService(serviceName);
    setTimeout(() => {
      serviceRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleLinkClick = (e) => {
    if (!user) { 
      e.preventDefault();
      navigate('/login'); 
    }
  };

  const addToCart = (service) => {
    setCart([...cart, service]);
    setNotification(true);
    setTimeout(() => setNotification(false), 6000); // Hide notification after 3 seconds
  };

  return (
    <> 
      <Navbar/> 
      <div className="legal-services-container">
        <h1 className='main-heading'>Legal Services</h1>
        <div className="intro">
          <p className='legal-sub-heading'>
            Welcome to Proptelligence Legal Services, your trusted destination for comprehensive legal solutions.
            From intricate business contracts to personal legal matters, our team of seasoned attorneys is here to navigate the complex terrain of law on your behalf.
          </p>
        </div> 
      
        <div className="container-legal">
          <div className="left-container">
            <img src="https://img.freepik.com/free-vector/legal-advisers-concept-illustration_114360-20398.jpg" alt="consultancy"/>
          </div>
          <div className="right-container">
            <h2>Advocates consultation</h2>
            <ul className='consultant-cont'>
              <li>Your tailored legal partner</li>
              <li>Offering litigation support</li>
              <li>Advisory services</li>
              <li>Contract drafting</li>
              <li>Corporate law</li>
              <li>Real estate transactions</li>
              <li>IP protection</li>
            </ul>
            <button onClick={() => addToCart({ name: 'Advocates consultation', price: 500 })}>
              Get Expert Consult Now 
            </button>
          </div>
        </div>
        {notification && (
        <div className="notification">
          <p>Your service has been successfully added to the cart!</p>
          <Link to="/cart">
            <button>View Cart</button>
          </Link>
        </div>
      )}

        <div className="services-cont">        
          <div className="service-1" onClick={() => handleServiceSelect('titleSearch')}>
            <img
              className="img1"
              src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703223017/Title_nmk2t2.jpg"
              alt="Service 1"
            />
            <h2 className='sub'>Title Search OR Legal Opinion</h2>
            <p className='slide-des'>
              A Property Title Opinion is a legal document that provides an opinion on the legal status of a piece of real estate.
            </p>
          </div>

          <div className="service-1" onClick={() => handleServiceSelect('drafting')}>
            <img
              className="img1"
              src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703223056/Drafting_imdjr6.webp"
              alt="Service 1"
            />
            <h2 className='sub'>Drafting</h2>
            <p className='slide-des'>
              Drafting legal documents requires precision and expertise.
              Our team specializes in creating legally binding documents tailored to your needs.
            </p>
          </div>
          <div className="service-1" >
            <img
              className="img1"
              src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703223055/legal-best_jxmw5i.png"
              alt="Service 1"
            />
            <h2 className='sub'>Affidavits</h2>
            <p className='slide-des'>
              An affidavit is a sworn statement made voluntarily under oath or affirmation before a qualified authority.
            </p>
            <button onClick={() => addToCart({ name: 'Affidavits', price: 2399 })}>
              Add Service 
            </button>
          </div>

          <div className="service-1" onClick={() => handleServiceSelect('registrationSupport')}>
            <img
              className="img1"
              src="https://img.freepik.com/premium-photo/real-estate-loan-home-agent-sale-agreement-insurance-finance-contract-signing-are-explaining-customers-office-property-manager-woman-use-computer_36325-3828.jpg"
              alt="Service 1"
            />
            <h2 className='sub'>Registration support at SRO</h2>
            <p className='slide-des'>
              Our legal services provide comprehensive registration support to
              ensure that all our clients are properly registered with the
              relevant authorities.
            </p> 
            <button>Get The legal Support Now</button>
          </div>
        </div>

        {selectedService === 'titleSearch' && <TitleSearch />}
        {selectedService === 'drafting' && <Drafting />}
        {selectedService === 'affidavits' && <SignUp />}
        {selectedService === 'registrationSupport' && <SignUp />}

        <div ref={serviceRef}></div>
      </div>

    </>
  );
};

export default LegalServices;
