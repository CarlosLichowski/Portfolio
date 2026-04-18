import './NavBar.css';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id: string) => {
    setIsMenuOpen(false); // Cierra el menú en móvil al hacer click
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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

      <div className='logoContainer'>
        <h1>Carlos J. Lichowski</h1>
      </div>

      <ul className={`links ${isMenuOpen ? 'show' : ''}`}>
        <li>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>Home</a>
        </li>
        <li>
          <a href="#Projects" onClick={(e) => { e.preventDefault(); handleScroll('Projects'); }}>Projects</a>
        </li>
        <li>
          <a href="#About" onClick={(e) => { e.preventDefault(); handleScroll('About'); }}>About</a>
        </li>
        <li>
          <a href="#Contact" onClick={(e) => { e.preventDefault(); handleScroll('Contact'); }}>Contact</a>
        </li>
      </ul>

      {/* Este div equilibra el espacio del logo para centrar los links */}
      <button>EN | ES</button>
    </nav>
  );
};


export default NavBar;