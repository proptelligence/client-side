import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import './index.css'

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.7,
    slidesToScroll: 1,
    
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Adjust autoplay speed (milliseconds)
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: 'services-section-home', // Added className
  }; 
  if (window.innerWidth <= 768) {
    settings.slidesToShow = 1.3;
  }

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
    <Slider {...settings} className='services-slider'> 
       <div className="service-info-container">
  <div className="free-banner">FREE</div>
  <div className="service-info">
    <Link to="/prop">
      <img
        src="https://img.freepik.com/premium-vector/security-infests-house-agrees-isometric-illustration_18660-608.jpg"
        alt="Service 1"
        className="service-image"
      />
    </Link>
    <h2 className="service-details-title-home">Property Services</h2>
    <p className="service-content">At Proptelligence, we recognize the challenges faced by property owners and strive to provide innovative solutions tailored to their needs.</p>
  </div>
</div>

        <div className="service-info">
          <Link to="/legalservices">
            <img
              src="https://img.freepik.com/premium-photo/consultation-male-lawyer-business-woman-customer_28283-887.jpg"
              alt="Service 2"
              className="service-image"
            />
          </Link>
          <h2 className="service-details-title-home">Legal Services</h2>
          <p className="service-content">Navigating the legal complexities of real estate transactions can be daunting.</p>
        
      </div> 
      <div className="service-info">
          <Link to="/legalservices">
            <img
              src="https://img.freepik.com/free-vector/legal-advisers-concept-illustration_114360-20398.jpg"
              alt="Service 1"
              className="service-image"
            />
          </Link>
          <h2 className="service-details-title-home">Advocates consultation</h2>
          <p className="service-content">Expert legal guidance tailored to your needs. Advocating for your rights and providing strategic counsel</p>
        </div>
        <div className="service-info">
          <Link to="/legalservices">
            <img
              src="https://www.lefoll.com/wp-content/uploads/2022/06/title-search-scaled.jpeg"
              alt="Service 2"
              className="service-image"
            />
          </Link>
          <h2 className="service-details-title-home">Title Search OR Legal Opinion</h2>
          <p className="service-content">A Property Title Opinion is a legal document that offers an assessment regarding the legal standing of a specific real estate property.</p>
        
      </div> 
      <div className="service-info">
          <Link to="/legalservices">
            <img
              src="https://img.freepik.com/free-vector/notary-service-concept-professional-lawyer-signing-legalizing-paper-document-person-witnessing-signatures-document-isolated-flat-vector-illustration_613284-1686.jpg"
              alt="Service 2"
              className="service-image"
            />
          </Link>
          <h2 className="service-details-title-home">Agreement Drafting</h2>
          <p className="service-content">Our team creates clear and concise agreements tailored to your specific requirements.</p>
        
      </div>  

    </Slider>
  );
};

export default Services;
