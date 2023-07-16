import Person from '../../assets/testimonials-img.jpg';
import './Slider.scss';
const Slider = () => {
  return (
    <div className="slider-container">
      <div className="img-container">
        <img src={Person} alt="" />
        <div className="card"></div>
      </div>
      <div className="slider-text-container">
        <p className="quotes">“</p>
        <p className="testimonial-text">
          The quick brown fox jumps over the lazy dog Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cum, ipsum autem? Minus possimus
          eligendi dolore totam, vero recusandae at error.
        </p>
        <p className="author">Jared Warner</p>
        <p className="designation">CEO of Figma</p>
      </div>
    </div>
  );
};
export default Slider;
