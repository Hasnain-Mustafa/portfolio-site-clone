import './Experience.scss';

const Experince = () => {
  return (
    <div className="card-container">
      <div className="card-start">
        <div className="number">56</div>
        <p className="text">Happy Clients</p>
      </div>
      <div className="card">
        <div className="number">87</div>
        <p className="text">Projects Done</p>
      </div>
      <div className="card">
        <div className="number">16</div>
        <p className="text">Awards Winning</p>
      </div>
      <div className="card-last">
        <p className="number">7</p>
        <p className="text">Years Experience</p>
      </div>
      <div className="ring"></div>
      <div className="circle"></div>
    </div>
  );
};

export default Experince;
