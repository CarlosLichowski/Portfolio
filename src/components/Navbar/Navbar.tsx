import './NavBar.css';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onUpdateActiveLink = (value: string) => { // Explicitly type 'value' as string
    setActiveLink(value);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbarContainer ${isMenuOpen ? 'menu-open' : ''}`}>
      <button
        className='hamburger-btn'
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* <div className='logoContainer'>
        <h1>Carlos J. Lichowski</h1>
      </div> */}

      <ul className={`links ${isMenuOpen ? 'show' : ''}`}>
        <li>
          <a
            href='#home'
            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='#ourOffers'
            className={
              activeLink === 'ourOffers' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => onUpdateActiveLink('ourOffers')}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href='#courses'
            className={
              activeLink === 'courses' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => onUpdateActiveLink('courses')}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href='#aboutus'
            className={
              activeLink === 'aboutus' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => onUpdateActiveLink('aboutus')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;