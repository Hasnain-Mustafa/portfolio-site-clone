import CTA from '../components/CTA/CTA';
import Experience from '../components/Experience/Experience';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Slider from '../components/Slider/Slider';

import './Pages.scss';

const Home = () => {
  return (
    <div>
      <div className="hero-container container">
        <Hero />
      </div>
      <div className="rest-site-background">
        <div className="container">
          <Skills />
          <Projects />
          <Experience />
          <Slider />
          <CTA />
        </div>
      </div>
    </div>
  );
};
export default Home;
