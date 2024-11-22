import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <Container className="creative-strategy-section">
      <Row>
        {/* Text Section */}
        <Col md={6} className="text-section">
          <h4>Who I Am</h4>
          <h2>Unleashing Potential with Creative Strategy</h2>
          <p>
          I’m Jyoti, a licensed psychologist dedicated to helping individuals like you navigate life’s challenges. 
          With years of experience and a deep commitment to mental wellness, I provide compassionate, evidence-based 
          therapy tailored to your unique needs.   </p>
          <h4>My Approach</h4>
          <ul>
            <li><span>✓</span> I listen without judgment and create a safe space for you to express yourself.</li>
            <li><span>✓</span> Your privacy is my priority, and I ensure every conversation remains secure.</li>
            <li><span>✓</span>  I believe in crafting therapy plans specifically designed to address your goals and concerns.</li>
          </ul>
          <Button className="btn-primary">Read More →</Button>
        </Col>

        {/* Image Section */}
        <Col md={6} className="image-section">
          <Row className="g-3">
            {/* First large image */}
            <Col xs={8}>
              <img src="../../public/img/image3.jpeg" className="img-fluid large-img" alt="Team collaboration" />
            </Col>
            {/* Two smaller images */}
            <Col xs={4}>
            <Col xs={12}>
              <img src="../../public/img/image1.jpeg" className="img-fluid small-img" alt="Team working" />
            </Col>
            {/* <Col xs={12}>
              <img src="../../public/img/image2.jpeg" className="img-fluid small-img" alt="Handshake" />
            </Col> */}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
