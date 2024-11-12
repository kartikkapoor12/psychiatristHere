import React from 'react';
import { FcCalendar, FcComments, FcList } from "react-icons/fc";  // Importing necessary icons
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap styles
import "./HowItWorks.css"

const steps = [
  {
    id: 1,
    title: "Make Schedule",
    description: "Choose a time that fits your routine.",
    icon: <FcCalendar size={60} />  // Using the calendar icon
  },
  {
    id: 2,
    title: "Book an Appointment",
    description: "Secure your spot with a quick and easy booking process.",
    icon: <FcComments size={60} />  // Using the comments icon
  },
  {
    id: 3,
    title: "Start Your Journey",
    description: "Begin your personalized therapy sessions with me and take control of your well-being.",
    icon: <FcList size={60} />  // Using the checklist icon
  }
];

const Step = ({ step }) => (
  <div className="col-md-4 text-center mb-4"> {/* Bootstrap classes for responsive grid */}
    <div className="step-icon">
      {step.icon} {/* Render the icon */}
    </div>
   
    <h3 className= "mb-4">{step.title}</h3>
    <p>{step.description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works-section"className="how-it-works container"> {/* Bootstrap container and margin */}
      <h1 className="text-center mb-4">How It Works</h1> {/* Centered and margin */}
       <h4>Your path to mental wellness starts here. The process is simple</h4>
      <div className="row">
        {steps.map(step => (
          <Step key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
