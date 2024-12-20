import React, { useState } from 'react';

import './index.css';
import { Link } from 'react-router-dom';

const MenuItems = [
    {
      title: 'About Us',
      path: '/aboutus',
      cName: 'dropdown-link'
    },
    
    {
      title: 'Careers',
      path: '/careers',
      cName: 'dropdown-link'
    },
    {
      title: 'Our Team',
      path: '/Ourteam',
      cName: 'dropdown-link'
    },
  
  ];

function DropdownC() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu3 clicked' : 'dropdown-menu3'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropdownC;