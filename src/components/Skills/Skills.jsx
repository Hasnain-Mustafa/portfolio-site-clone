import { Link } from 'react-router-dom';
import './Skills.scss';
const Skills = () => {
  return (
    <section className="skills-container">
      <div className="card-container">
        <div className="left-cards">
          <div className="card">
            <span class="green-ring-icon">
              <ion-icon name="logo-firebase"></ion-icon>
            </span>
            <h1>Product Design</h1>
            <p>The technological revolution is changing aspect</p>
          </div>
          <div className="card">
            <span class="green-ring-icon">
              <ion-icon name="logo-firebase"></ion-icon>
            </span>
            <h1>Product Design</h1>
            <p>The technological revolution is changing aspect</p>
          </div>
        </div>
        <div className="right-cards">
          <div className="card">
            <span class="green-ring-icon">
              <ion-icon name="logo-firebase"></ion-icon>
            </span>
            <h1>Product Design</h1>
            <p>The technological revolution is changing aspect</p>
          </div>
          <div className="card">
            <span class="green-ring-icon">
              <ion-icon name="logo-firebase"></ion-icon>
            </span>
            <h1>Product Design</h1>
            <p>The technological revolution is changing aspect</p>
          </div>
        </div>
      </div>
      <div className="skills-inner-container">
        <p className="headline">&#8213; My Skills</p>
        <div className="skills-text-container">
          <h3 className="skills-heading">Why Hire Me For Next Project?</h3>
          <p>
            The technological revolution is changing aspect of our lives, and
            the fabric of society itself. it's also changing the way we learn
            and what we learn. Factual knowledge is less prized when everything
            you ever need to know can be found on your phone. There's no
            imperative to be an expert at doing everything when you can.
          </p>

          <Link to="#" className="contact-button">
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Skills;
