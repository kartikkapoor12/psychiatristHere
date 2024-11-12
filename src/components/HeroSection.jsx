import React from 'react';
import "./HeroSection.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  // Function to handle scrolling to the bottom section
  const scrollToBottom = () => {
    const bottomSection = document.getElementById('how-it-works-section');
    bottomSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
  };

  return (
    <>
      <section className="hero-section container my-5"> 
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 col-md-12 mb-4"> 
            <h1>
              Hello I am <span className="text-primary-color">Jyoti</span> 
            </h1>
            <h3>Your Personal Psychologist.</h3>
            <p>Counseling For Your Better Life</p>

            {/* Styled "Know More" Button */}
            <button onClick={scrollToBottom} className="btn custom-btn">
              Know More
            </button>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 col-md-12"> 
            <img
              src="./../../public/img/hover-image.png"
              alt="Counseling session"
              className="img-fluid" /* Responsive image */
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
