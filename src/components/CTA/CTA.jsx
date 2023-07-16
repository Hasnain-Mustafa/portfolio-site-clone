import { Link } from 'react-router-dom';
import './CTA.scss';

const CTA = () => {
  return (
    <section className="cta-container">
      <div className="cta-inner-container">
        <hr />
        <h3 className="cta-heading">Lets Work Together</h3>
        <p className="cta-text">
          The technological revolution is changing aspect of our lives, and the
          fabric of society itself. it's also changing the way we learn and what
          we learn
        </p>
        <Link to="/contact" className="contact-button">
          Contact Me
        </Link>
        <div className="ring"></div>
        <div className="circle"></div>
      </div>
    </section>
  );
};
export default CTA;
