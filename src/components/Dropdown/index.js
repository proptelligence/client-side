import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link for navigation
import './index.css';
import { FiPhoneCall } from 'react-icons/fi'; // Phone icon
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon
import { AiOutlineMail } from 'react-icons/ai'; // Mail icon

const MenuItems = [
  {
    title: '',
    icon: <FiPhoneCall />, // Phone icon
    phoneNumber: '8062181169', // The phone number
    cName: 'dropdown-link'
  },
  {
    title: 'Chat with Us',
    icon: <FaWhatsapp />, // WhatsApp icon
    link: 'https://wa.me/918062181169?text='+encodeURIComponent('Hello there! I have a question.'), // WhatsApp chat link
    cName: 'dropdown-link'
  },
  {
    title: 'Drop Your Mail',
    icon: <AiOutlineMail />,
    path: '/contact', // Path to contact form
    cName: 'dropdown-link'
  }
];

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu4 clicked' : 'dropdown-menu4'}
      >
        {MenuItems.map((item, index) => (
          <li key={index}>
            {item.path ? (
              <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                {item.icon && <span>{item.icon}</span>} {item.title}
              </Link>
            ) : (
              <a
                className={item.cName}
                href={item.link ? item.link : `tel:${item.phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setClick(false)}
              >
                {item.icon && <span>{item.icon}</span>} {item.phoneNumber ? `${item.title}: ${item.phoneNumber}` : item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dropdown;
