import { Link } from 'react-router-dom';
import HeroImg from '../../assets/hero-img.png';
import AiLogo from '../../assets/ai-icon.png';
import IdLogo from '../../assets/id-icon.png';
import PsLogo from '../../assets/ps-icon.png';
import XdLogo from '../../assets/xd-icon.png';
import './Hero.scss';

const Home = () => {
  return (
    <section className="hero-section">
      <p className="headline">&#8213; Introducing</p>
      <div className="hero-container">
        <div className="hero-text-container">
          <h2 className="hello-heading">
            Hello <br />
          </h2>
          <h1 className="hero-heading">
            I'm Jessy <br />
            Walter
          </h1>
          <p>
            Since beginning my journey as a freelance designer nearby 7 years
            ago, I 've done remote work for agencies, consulted for startup, and
            collaborated with talented people to create digital products.
          </p>

          <Link to="/contact" className="contact-button">
            Contact Me
          </Link>
        </div>
        <div className="img-container">
          <img className="hero-img" src={HeroImg} alt="" />
          <img className="id-logo" src={IdLogo} alt="" />
          <img className="ps-logo" src={PsLogo} alt="" />
          <img className="ai-logo" src={AiLogo} alt="" />
          <img className="xd-logo" src={XdLogo} alt="" />
          <div className="circle"></div>
        </div>
      </div>
    </section>
  );
};
export default Home;
