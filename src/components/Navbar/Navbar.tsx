import './NavBar.css';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Definimos explícitamente los links para separar el ID del DOM de la clave de traducción
  const navLinks = [
    { id: 'home', key: 'nav.home' },
    { id: 'Projects', key: 'nav.projects' },
    { id: 'About', key: 'nav.about' },
    { id: 'Contact', key: 'nav.contact' },
  ];

  useEffect(() => {
    const sections = navLinks.map(link => link.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbarContainer ${isMenuOpen ? 'menu-open' : ''}`}>
      {/* Logo */}
      <div className='logoContainer'>
        <h1>Carlos J. Lichowski</h1>
      </div>

      {/* Contenedor derecho para enlaces y botón */}
      <div className="nav-right-container">
        {/* Links */}
        <ul className={`links ${isMenuOpen ? 'show' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                onClick={(e) => { e.preventDefault(); handleScroll(link.id); }}
                className={`${activeSection === link.id ? 'active' : ''} ${link.id === 'Contact' ? 'NavContactBtn' : ''}`}
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón Idioma */}
        <button onClick={toggleLanguage} className="lang-btn">
          {i18n.language === 'en' ? 'EN | ES' : 'ES | EN'}
        </button>
      </div>

      {/* Hamburguesa (solo móvil) */}
      <button
        className='hamburger-btn'
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

export default NavBar;