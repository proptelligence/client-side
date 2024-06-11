import React from 'react';
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';
import './index.css';

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
    title: "The Ultimate Guide to Buying a Home Online",
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
    title: "India's Real State Sector in 2030",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709380034/real_oa2n5a.png",
    content: "India's real estate sector is experiencing a remarkable transformation, poised for significant growth and contributing substantially to the nation's economic engine.",
    path: "/indiarealstate2023",
    datetime: "Feb 28, 2024",
  },
  {
    title: "The Ultimate Guide to Buying a Home Online",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
    content: "Owning a home is a dream for many, but navigating the traditional buying process can feel complex and overwhelming.",
    path: "/buyahome",
    datetime: "March 03, 2024",
  },
  {
    title: "Understanding Property Trends in India",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1710069093/blog-4_hkn9cf.png",
    content: "The Indian Real Estate Sector is an important and ever changing landscape. The number of online searches for “houses for sale near me” has gone through the roof showing..",
    path: "/legaladvice",
    datetime: "March 09, 2024",
  },
  {
    title: "Navigating Legal Aid Services",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709380034/real_oa2n5a.png",
    content: "The Indian real sector holds the key to the most lucrative property investment and ownership. Nevertheless the procedures of real estate dealings can be not only over...",
    path: "/indiarealstate2023",
    datetime: "Feb 28, 2024",
  },
  {
    title: "Integrating AR Technology in Real Estate",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
    content: "Enjoy the convenience of not having to attend long and boring real estate tours anymore. You may be experiencing scheduling conflicts, timing mismatches..",
    path: "/buyahome",
    datetime: "March 03, 2024",
  },
  {
    title: "Maximizing Efficiency: IoT Applications in Maintenance",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
    content: "Visualize a world where handling properties has never been easier. No more complaints about unexpected breakdowns, struggling to regulate energy costs, and facing outdated security systems...",
    path: "/buyahome",
    datetime: "March 03, 2024",
  }
];

const BlogItemDetails = () => {

  const renderBlogItemDetails = () => {
    return (
      <div className="blogs-list-container">
        <h1 className='main-heading-blog'>Welcome to the Proptelligence Blogs Page – Unlock Our Free Property Service!</h1>
        <div className="blogs-list">
          {blogData.map((blog, index) => (
            <div key={index} className="blog-info-item">
              <h2 className="blog-details-title-list">{blog.title}</h2>
              <div className="author-details">
                <p className="blog-item-datetime">{blog.datetime}</p>
              </div>
              <Link to={blog.path}>
                <img className="blog-item-image" src={blog.imageUrl} alt={blog.title} />
              </Link>
              <p className="blog-item-content">{blog.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <> 
    <Navbar/>
     <div className="blogs-list-item">{renderBlogItemDetails()}</div>
    </>
  );
};

export default BlogItemDetails;
