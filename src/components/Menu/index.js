import { useState, useEffect, useRef } from 'react';
import DropProp from '../DropProp';
import { Link } from 'react-router-dom'; 
import './index.css';

const Menu = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    if (window.innerWidth > 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    }
  };

  const toggleDropdown = () => {
    if (window.innerWidth < 960) {
      setDropdown(prev => !prev);
    }
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={toggleDropdown}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link to={items.url}>{items.title}</Link>
            )}
            {depthLevel > 0 && window.innerWidth < 960 ? null : (
              <span className="arrow" />
            )}
          </button>
          <DropProp
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={toggleDropdown}
          >
            {items.title}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <DropProp
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default Menu;
