import './NavBar.css';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



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
        <a href="#home" onClick={(e) => {
  e.preventDefault();
  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
}}>Home</a>
        </li>
        <li>
          <a href="#Projects" onClick={(e) => {
  e.preventDefault();
  document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' });
}}>Projects</a>
        </li>

        <li>


          <a href="#Skills" onClick={(e) => {
  e.preventDefault();
  document.getElementById('Skills')?.scrollIntoView({ behavior: 'smooth' });
}}>Skills</a>

          
        </li>
        <li>


          <a href="#About" onClick={(e) => {
  e.preventDefault();
  document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' });
}}>About</a>
        </li>

        <li>


<a href="#Contact" onClick={(e) => {
e.preventDefault();
document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
}}>Contact</a>
</li>
      </ul>
    </nav>
  );
};

export default NavBar;