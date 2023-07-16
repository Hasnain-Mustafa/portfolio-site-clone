import { Link } from 'react-router-dom';
import Project1 from '../../assets/portfolio-1-img.jpg';
import Project2 from '../../assets/portfolio-2-img.jpg';
import Project3 from '../../assets/portfolio-3-img.jpg';

import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="project-container">
        <div className="project-text-container">
          <p className="headline">&#8213; Project1</p>
          <h3 className="project-heading">Branding Nice Studio</h3>
          <p>
            The technological revolution is changing aspect of our lives, and
            the fabric of society itself. it's also changing the way we learn
            and what we learn. Factual knowledge is less prized when everything
            you ever need to know can be found on your phone. There's no
            imperative to be an expert at doing everything when you can.
          </p>

          <Link to="#" className="read-more">
            &rarr; Read More
          </Link>
        </div>
        <div className="img-container">
          <img className="project-img" src={Project1} alt="" />
          <div className="card1"></div>
        </div>
      </div>
      <div className="project-container">
        <div className="img-container">
          <img className="project-img" src={Project2} alt="" />
          <div className="card2"></div>
        </div>
        <div className="project-text-container">
          <p className="headline">&#8213; Project2</p>
          <h3 className="project-heading">Branding Nice Studio</h3>
          <p>
            The technological revolution is changing aspect of our lives, and
            the fabric of society itself. it's also changing the way we learn
            and what we learn. Factual knowledge is less prized when everything
            you ever need to know can be found on your phone. There's no
            imperative to be an expert at doing everything when you can.
          </p>

          <Link to="#" className="read-more">
            &rarr; Read More
          </Link>
        </div>
      </div>
      <div className="project-container">
        <div className="project-text-container">
          <p className="headline">&#8213; Project3</p>
          <h3 className="project-heading">Branding Nice Studio</h3>
          <p>
            The technological revolution is changing aspect of our lives, and
            the fabric of society itself. it's also changing the way we learn
            and what we learn. Factual knowledge is less prized when everything
            you ever need to know can be found on your phone. There's no
            imperative to be an expert at doing everything when you can.
          </p>

          <Link to="#" className="read-more">
            &rarr; Read More
          </Link>
        </div>
        <div className="img-container">
          <img className="project-img" src={Project3} alt="" />
          <div className="card1"></div>
        </div>
      </div>
      <div className="button">
        <Link className="projects-btn">View More</Link>
      </div>
    </section>
  );
};
export default Projects;
