import React, { useState } from 'react';

import './index.css';
import { Link } from 'react-router-dom';

const MenuItems = [
    {
      title: 'Industries',
      path: '/industries',
      cName: 'dropdown-link'
    },
    
    {
      title: 'Technologies',
      path: '/tech',
      cName: 'dropdown-link'
    },
    {
      title: 'Insights',
      path: '/insights',
      cName: 'dropdown-link'
    },
  ];

function DropdownA() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu4 clicked' : 'dropdown-menu4'}
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

export default DropdownA;