import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderSvg from '../../assets/logo-header.svg';
import './Navbar.scss';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" onClick={() => handleLinkClick('home')}>
          <img src={HeaderSvg} alt="header logo" />
        </Link>
        <div className="nav-menu">
          <ul className={`nav-links ${isMenuOpen ? 'hidden' : ''}`}>
            <li>
              <Link
                to="/"
                onClick={() => handleLinkClick('home')}
                className={activeLink === 'home' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={() => handleLinkClick('portfolio')}
                className={activeLink === 'portfolio' ? 'active' : ''}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => handleLinkClick('contact')}
                className={activeLink === 'contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className={`nav-buttons ${isMenuOpen ? 'menu-open' : ''}`}>
            <li>
              <Link to="#" className="dribble-icon">
                <ion-icon name="logo-dribbble"></ion-icon>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => handleLinkClick('contact')}
                className="contact-button"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <button className="hamburger-icon" onClick={handleMenuToggle}>
          <ion-icon
            name={isMenuOpen ? 'close-outline' : 'menu-outline'}
          ></ion-icon>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="mobile-nav">
          <ul>
            <li>
              <Link to="/" onClick={() => handleLinkClick('home')}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={() => handleLinkClick('portfolio')}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => handleLinkClick('contact')}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
