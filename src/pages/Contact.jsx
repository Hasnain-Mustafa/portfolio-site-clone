import './Pages.scss';

const Contact = () => {
  return (
    <div className="rest-site-background">
      <div className="container">
        <div className="contact-container">
          <div className="contact-text-container">
            <p className="headline">&#8213; Contact Me</p>
            <h3 className="contact-heading">Get In Touch With Me</h3>
            <p>
              The technological revolution is changing aspect of our lives, and
              the fabric of society itself. it's also changing the way we learn
              and what we learn. Factual knowledge is less prized when
              everything you ever need to know can be found on your phone.
              There's no imperative to be an expert at doing everything when you
              can.
            </p>
            <div className="phone-mail-container">
              <div className="phone-container">
                <div className="contact-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
                <div>
                  <h6>Phone</h6>
                  <p>+99 (0) 101 0000 888</p>
                  <p>+99 (0) 101 0000 777</p>
                </div>
              </div>
              <div className="email-container">
                <div className="contact-icon">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
                <div>
                  <h6>Email</h6>
                  <p>Info@yourdomain.com</p>
                  <p>Info@yourdomain.net</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form className="form">
              <input type="text" name="FullName" placeholder="Full Name" />
              <input type="text" name="Email" placeholder="Email" />
              <textarea
                name="Message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message*"
              ></textarea>

              <button className="form-btn">Send To Me</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
