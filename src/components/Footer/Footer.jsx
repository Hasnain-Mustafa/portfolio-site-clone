import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-header.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="container footer">
      <Link to="/" className="footer-logo">
        <img src={Logo} alt="Footer-logo" />
      </Link>
      <p>
        © 2023 Freelancer - Phlox Elementor WordPress Theme. All rights
        reserved.
      </p>
      <div className="footer-logos">
        <Link to="#" className="footer-icon">
          <ion-icon name="logo-twitch"></ion-icon>
        </Link>
        <Link to="#" className="footer-icon">
          <ion-icon name="logo-linkedin"></ion-icon>
        </Link>
        <Link to="#" className="footer-icon">
          <ion-icon name="logo-instagram"></ion-icon>
        </Link>
        <Link to="#" className="footer-icon">
          <ion-icon name="logo-behance"></ion-icon>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
