import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './index.css';

const MenuItems = [
  {
    title: 'Products',
    path: 'product-section',
    cName: 'dropdown-link'
  },
  {
    title: 'Services',
    path: 'services-container',
    cName: 'dropdown-link'
  },
];

function DropdownS() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <ScrollLink
                className={item.cName}
                to={item.path}
                smooth={true} // Enables smooth scrolling
                duration={500} // Scroll duration
                onClick={() => setClick(false)}
              >
                {item.title}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropdownS;
