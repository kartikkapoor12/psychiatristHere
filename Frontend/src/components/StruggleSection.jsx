import React from 'react';
import './StruggleSection.css'; // Assuming the CSS file
import { FaRegSadTear, FaBeer, FaExclamationTriangle, FaBrain, FaSmileBeam, FaBolt, FaQuestionCircle } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';


const struggles = [
  {
    title: 'Depression',
    description: 'Do you feel like your sadness just won’t go away, and it is hard to find a way ahead? We can help.',
    icon: <FaRegSadTear />,
  },
  {
    title: 'Alcohol Addiction',
    description: 'Is your use of alcohol interfering with your ability to lead your life fully? You can find the right support.',
    icon: <FaBeer />,
  },
  {
    title: 'Generalised Anxiety Disorder (GAD)',
    description: 'Do you often feel restless, worried or on-edge? Let us help you on how to cope better.',
    icon: <FaExclamationTriangle />,  
  },
  {
    title: 'Obsessive Compulsive Disorder (OCD)',
    description: 'Are unwanted thoughts making you anxious and engage in unhelpful behaviours? ',
    icon: <FaBrain />,
  },
  {
    title: 'Bipolar Disorder',
    description: 'Do you struggle with periods of intense happiness, followed by intense sadness? You can find the care you need.',
    icon: <FaSmileBeam />,
  },
  {
    title: 'Adult ADHD',
    description: 'Have you always struggled with difficulty focusing, being restless, or impulsivity? There are ways to manage it better.',
    icon: <FaBolt />,  
  },
];

const StrugglesSection = () => {
  return (
    <section className="struggles-section">
      <div className="container">
        <h2 className="section-title">What are you struggling with?</h2>
        <p className="section-subtitle">
          We are here to support you with all your mental health needs.
        </p>
        <div className="row">
          {struggles.map((struggle, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card struggle-card">
                <div className="card-body">
                  <div className="icon-container">{struggle.icon}</div>
                  <h4 className="card-title">{struggle.title}</h4>
                  <p className="card-text">{struggle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Section */}
       <div className="consult-coach-section container-fluid">
            <div className="row align-items-center consult-coach-card p-4">
                <div className="col-lg-1 col-md-2 text-center">
                    <div className="icon-wrapper">
                        <i className="fas fa-question-circle question-icon"></i>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6">
                    <h4 className="consult-title">Not sure what kind of care you need?</h4>
                </div>
                <div className="col-lg-3 col-md-4 text-md-right text-center">
                    <button className="btn consult-btn">Free 15-minute consultation</button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StrugglesSection;
