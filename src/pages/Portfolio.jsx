import { Link } from 'react-router-dom';

import Project1 from '../assets/portfolio-1-img.jpg';
import Project2 from '../assets/portfolio-2-img.jpg';
import Project3 from '../assets/portfolio-3-img.jpg';
import Project4 from '../assets/portfolio-4-img.jpg';
import Project5 from '../assets/portfolio-5-img.jpg';
import Project6 from '../assets/portfolio-6-img.jpg';

import '../components/Projects/Projects.scss';
import './Pages.scss';

const Portfolio = () => {
  return (
    <div className="rest-site-background">
      <div className="container">
        <section className="projects-section">
          <div className="portfolio-project-container">
            <div className="project-text-container">
              <p className="headline">&#8213; Project 1</p>
              <h3 className="project-heading">Branding Nice Studio</h3>
              <p>
                The technological revolution is changing aspect of our lives,
                and the fabric of society itself. it's also changing the way we
                learn and what we learn. Factual knowledge is less prized when
                everything you ever need to know can be found on your phone.
                There's no imperative to be an expert at doing everything when
                you can.
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
          <div className="portfolio-project-container">
            <div className="img-container">
              <img className="project-img" src={Project2} alt="" />
              <div className="card2"></div>
            </div>
            <div className="project-text-container">
              <p className="headline">&#8213; Project 2</p>
              <h3 className="project-heading">Branding Nice Studio</h3>
              <p>
                The technological revolution is changing aspect of our lives,
                and the fabric of society itself. it's also changing the way we
                learn and what we learn. Factual knowledge is less prized when
                everything you ever need to know can be found on your phone.
                There's no imperative to be an expert at doing everything when
                you can.
              </p>

              <Link to="#" className="read-more">
                &rarr; Read More
              </Link>
            </div>
          </div>
          <div className="portfolio-project-container">
            <div className="project-text-container">
              <p className="headline">&#8213; Project 3</p>
              <h3 className="project-heading">Branding Nice Studio</h3>
              <p>
                The technological revolution is changing aspect of our lives,
                and the fabric of society itself. it's also changing the way we
                learn and what we learn. Factual knowledge is less prized when
                everything you ever need to know can be found on your phone.
                There's no imperative to be an expert at doing everything when
                you can.
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
          <div className="portfolio-project-container">
            <div className="img-container">
              <img className="project-img" src={Project4} alt="" />
              <div className="card2"></div>
            </div>
            <div className="project-text-container">
              <p className="headline">&#8213; Project 4</p>
              <h3 className="project-heading">Essential UI Icon Pack</h3>
              <p>
                The technological revolution is changing aspect of our lives,
                and the fabric of society itself. it's also changing the way we
                learn and what we learn. Factual knowledge is less prized when
                everything you ever need to know can be found on your phone.
                There's no imperative to be an expert at doing everything when
                you can.
              </p>

              <Link to="#" className="read-more">
                &rarr; Read More
              </Link>
            </div>
          </div>
          <div className="portfolio-project-container">
            <div className="project-text-container">
              <p className="headline">&#8213; Project 5</p>
              <h3 className="project-heading">Financial App Design</h3>
              <p>
                The technological revolution is changing aspect of our lives,
                and the fabric of society itself. it's also changing the way we
                learn and what we learn. Factual knowledge is less prized when
                everything you ever need to know can be found on your phone.
                There's no imperative to be an expert at doing everything when
                you can.
              </p>

              <Link to="#" className="read-more">
                &rarr; Read More
              </Link>
            </div>
            <div className="img-container">
              <img className="project-img" src={Project5} alt="" />
              <div className="card1"></div>
            </div>
          </div>
          <div className="portfolio-project-container project-6-container">
            <div className="img-container">
              <img className="project-img" src={Project6} alt="" />
              <div className="card2"></div>
            </div>
            <div className="project-text-container">
              <p className="headline">&#8213; Project 6</p>
              <h3 className="project-heading">Design Brand Guidelines</h3>
              <p>
                The technological revolution is changing aspect of our lives,
                and the fabric of society itself. it's also changing the way we
                learn and what we learn. Factual knowledge is less prized when
                everything you ever need to know can be found on your phone.
                There's no imperative to be an expert at doing everything when
                you can
              </p>

              <Link to="#" className="read-more">
                &rarr; Read More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Portfolio;
