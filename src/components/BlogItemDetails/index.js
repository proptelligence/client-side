import React from 'react';
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';
import Explore from '../../components/Assets/Blog21.png'; 
import Blog22 from '../../components/Assets/Blog22.png';
import Blog23 from '../../components/Assets/Blog23.png';
import Blog24 from '../../components/Assets/Blog24.png';
import Blog25 from '../../components/Assets/Blog25.png';
import Blog26 from '../../components/Assets/Blog26.png';
import Blog27 from '../../components/Assets/Blog27.png';
import Blog28 from '../../components/Assets/Blog28.png';
import './index.css';

const blogData = [
  {
    title: "Proptylics Importance",
    imageUrl: Blog28,
    content: "Understanding the Importance of Proptylics: Enhancing Efficiency and Insight in Property Management",
    path: "/Proplytics",
  },
  {
    title: "Automated Systems In property",
    imageUrl: Blog26,
    content: "Transforming Real Estate: The Impact of Automated Systems in Property Management and Operations",
    path: "/Propmanagement",
  },
  {
    title: "AI in Legal Documentation",
    imageUrl: Blog27,
    content: "AI in Legal Documentation: Revolutionizing Efficiency, Accuracy, and Compliance in Modern Legal Practices.",
    path: "/AI-blog",
  },
  {
    title: "Discovering Hidden Gems: Real Estate in Chennai",
    imageUrl: Blog24,
    content: "Unearthing Chennai's Hidden Real Estate Gems: A Deep Dive into Unique Property Opportunities and Market Insights.",
    path: "/Chennai-blog",
  },
  {
    title: "Chat Bot Adoption for property",
    imageUrl: Blog25,
    content: "Revolutionizing Property Management: The Growing Adoption of AI-Powered Chatbots for Enhanced Customer Engagement and Efficiency.",
    path: "/Propbot-Blog",
  },
  {
    title: "Exploring the Real Estate Market: Pune Properties and Beyond",
    imageUrl: Blog23,
    content: "Exploring Pune and Beyond: A Comprehensive Guide to the Expanding Real Estate Market, Property Choices.",
    path: "/puneandbeyond-blog",
  },
  {
    title: "Investing in Mumbai Real Estate",
    imageUrl: Blog22,
    content: "Unlocking Investment Opportunities in Mumbai's Thriving Real Estate Market",
    path: "/invest-blog",
  },
  {
    title: "Exploring Real Estate Opportunities in Delhi",
    imageUrl: Explore,
    content: "The real estate landscape in India is rapidly evolving, and with it, the way properties are bought and sold.",
    path: "/explorerealestate-blog",
  },
  {
    title: "Free Property Listing Sites in India",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1708941784/property-img_y0gn4h.png",
    content: "The real estate landscape in India is rapidly evolving, and with it, the way properties are bought and sold.",
    path: "/freepropertylist",
  },
  {
    title: "Get Legal Advice Easily with Proptelligence",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1710069093/blog-4_hkn9cf.png",
    content: "In today's fast-paced world, navigating the intricacies of the legal system can be a daunting task, especially when challenges arise outside of traditional business hours.",
    path: "/legaladvice",
  },
  {
    title: "India's Real State Sector in 2030",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709380034/real_oa2n5a.png",
    content: "India's real estate sector is experiencing a remarkable transformation, poised for significant growth and contributing substantially to the nation's economic engine.",
    path: "/indiarealstate2023",
  },
  {
    title: "The Ultimate Guide to Buying a Home Online",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
    content: "Owning a home is a dream for many, but navigating the traditional buying process can feel complex and overwhelming.",
    path: "/buyahome",
  },
  {
    title: "Understanding Property Trends in India",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1710069093/blog-4_hkn9cf.png",
    content: "The Indian Real Estate Sector is an important and ever changing landscape. The number of online searches for “houses for sale near me” has gone through the roof showing..",
    path: "/legaladvice",
  },
  {
    title: "Navigating Legal Aid Services",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709380034/real_oa2n5a.png",
    content: "The Indian real sector holds the key to the most lucrative property investment and ownership. Nevertheless the procedures of real estate dealings can be not only over...",
    path: "/indiarealstate2023",
  },
  {
    title: "Integrating AR Technology in Real Estate",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
    content: "Enjoy the convenience of not having to attend long and boring real estate tours anymore. You may be experiencing scheduling conflicts, timing mismatches..",
    path: "/buyahome",
  },
  {
    title: "Navigating Property Legal Issues",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
    content: "Visualize a world where handling properties has never been easier. No more complaints about unexpected breakdowns, struggling to regulate energy costs, and facing outdated security systems...",
    path: "/buyahome",
  },
  {
    title: "Maximizing Your Investment in Ahmedabad Real Estate",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1710069093/blog-4_hkn9cf.png",
    content: "Ahmedabad's Real Estate Sector is in a phase of rapid development, with investors seizing the opportunity provided by many interesting offers...",
    path: "/legaladvice",
  },
  {
    title: "Integrating AR Technology in Real Estate",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
    content: "Enjoy the convenience of not having to attend long and boring real estate tours anymore. You may be experiencing scheduling conflicts, timing mismatches...",
    path: "/buyahome",
  },
  {
    title: "Maximizing Efficiency: IoT Applications in Maintenance",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1710069093/blog-4_hkn9cf.png",
    content: "Visualize a world where handling properties has never been easier. No more complaints about unexpected breakdowns, struggling to regulate energy costs, ..",
    path: "/legaladvice",
  },
  {
    title: "Discovering the Best Deals on Houses for Sale",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709380034/real_oa2n5a.png",
    content: "The process of looking for your dream house could be exciting but also be overwhelming, especially when you are in an unstable housing market...",
    path: "/indiarealstate2023",
  },
  {
    title: "Maximizing Housing Affordability and  Profitability in Real Estate",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
    content: "The housing and the business sector is essential, as it determines the living space and spaces for business. However, the affordable housing..",
    path: "/buyahome",
  },
  {
    title: "Exploring the Future of Real Estate in India",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
    content: "While the Indian real estate market presents both challenges and opportunities, it cannot be neglected. It is an ever-changing atmosphere adapting...",
    path: "/buyahome",
  },
  {
    title: "The Future of Real Estate",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
    content: "The Indian real estate market is a dynamic and ever- changing landscape catering to the needs of the modern home seekers...",
    path: "/buyahome",
  },
  {
    title: "Uncovering Hidden Gems in Hyderabad Real Estate",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
    content: "Hyderabad's real estate market is a captivating blend of historic charm and modern innovation.The city has a wide variety of choices ranging from the busy...",
    path: "/buyahome",
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
