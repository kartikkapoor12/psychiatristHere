import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeart } from 'react-icons/fa'; // Import heart icon from react-icons

const Footer = () => {
  const styles = {
    section: {
      backgroundColor: '#f8f9fa',
      padding: '50px',
    },
    button: {
      backgroundColor: '#ff6f61',
      border: 'none',
      padding: '10px 20px',
      color: 'white',
      fontSize: '1rem',
      borderRadius: '30px',
      marginTop: '10px',
      fontWeight:'bold'
    },
    imageWrapper: {
      borderRadius: '50%',
      overflow: 'hidden',
      width: '200px',
      height: '200px',
      marginLeft: 'auto',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    footer: {
      backgroundColor: '#4d7457',
      padding: '6px 0',
      color: 'white',
      textAlign: 'center',
      marginTop: '30px',
      fontSize: '14px',
    },
    heartIcon: {
      color: 'white',
      margin: '0 6px',
    },
  };

  return (
    <>
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6">
          <h2>Need help for someone you care about?</h2>
          <p>
            We know how hard it is to watch someone you care about struggling. Finding the right care is the first step.
            If you want guidance on the best mental health support for yourself or a loved one, 
            I’m here to provide personalized care to those in need, offering a compassionate and non-judgmental environment.
          </p>
          <button style={styles.button} className="btn">
            Connect With Us
          </button>
        </div>

        {/* Image Section */}
        <div className="col-md-6 d-flex justify-content-center">
          <div style={styles.imageWrapper}>
            <img
              src="https://r2.erweima.ai/imgcompressed/compressed_0865d9bf6a7cbf12b0090ec0de7c2748.webp" // Replace with the actual image path
              alt="Supportive Care"
              style={styles.image}
            />
          </div>
        </div>
      </div>

     
    </div>
     {/* Footer Section */}
     <footer style={styles.footer}>
     Copyright © BoBDev | Developed with <FaHeart style={styles.heartIcon} /> by BoBDev
   </footer>
   </>
    
  );
};

export default Footer;
