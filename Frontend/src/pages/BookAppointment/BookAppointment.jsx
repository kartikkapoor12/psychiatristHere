import React, { useEffect, useState } from "react";
import { Form, Button, Card, Alert, ProgressBar } from "react-bootstrap";
import "./BookAppointment.css";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const BookAppointment = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    consultationFor: "",
    fullName: "",
    dateOfBirth: "",
    contactInfo: "",
    preferredContact: "",
    sessionFrequency: "",
    virtualCounseling: "",
    previousCounseling: "",
    takingMedication: "",
    reasonForCounseling: "",
    medicationList: "",
    mentalHealthDiagnosis: "",
    diagnosisDetails: "",
    recentLifeChanges: "",
    additionalNotes: "",
    consent: ""
  });
  const [missingFields, setMissingFields] = useState([]);

  const mandatoryFields = {
    1: ["consultationFor", "fullName", "dateOfBirth", "contactInfo", "preferredContact"],
    2: ["reasonForCounseling", "previousCounseling", "takingMedication"],
    3: ["mentalHealthDiagnosis"],
    4: ["sessionFrequency", "virtualCounseling"],
    5: ["consent"]
  };
  const namingLabels = {
    "consultationFor":"Consultation For",
    "fullName" : "Full Name",
    "dateOfBirth" : "Date of birth", 
    "contactInfo" : "Constact Information", 
    "preferredContact" : "Contact Info",

    "reasonForCounseling" : "Reason For Counseling",
    "previousCounseling" : "Previous Counseling sessions",
    "takingMedication" : "Taking any Medications",

    "mentalHealthDiagnosis" : "Mental Health Conditions",

    "sessionFrequency" : "Session Frequency",

    "virtualCounseling" : "Virtual counseling sessions",

    "consent" : "Terms and conditions"
    
  }
 const nameConventions = (fields, namingLabels)=>{
  let namedString = ' ' ;   
  fields.map ((item,index)=>{
    namedString = namedString + namingLabels[item] + ',';
      }) 
   return namedString.slice(0,namedString.length-1);
 }
  const validateFields = () => {
    const fieldsToCheck = mandatoryFields[step] || [];
    const missing = fieldsToCheck.filter((field) => !formData[field]);
    setMissingFields(missing);
    return missing.length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOptionSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (validateFields()) {
      setStep(step + 1);
      setMissingFields([]);
    }
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      console.log("Form submitted:", formData);
      // Add backend POST call here
    }
  };

  const progressPercentage = (step / 5) * 100;

  return (
    <div className="form-container redesigned-container">
      {/* Alert for missing fields */}
      {missingFields.length > 0 && (
        <Alert variant="danger" className="mb-3 alert-box">
          <strong>Missing Fields:</strong> 
          {nameConventions(missingFields, namingLabels)}
        </Alert>
      )}

      {/* Gamified Card */}
      <Card className="form-card gamified-card">
        <Card.Body>
          <h2 className="form-title gamified-header">🧠 Book Your Appointment</h2>
          <p className="form-subtitle">
            Step {step} of 5: You're on your way to better mental health.
          </p>
          <ProgressBar
            now={progressPercentage}
            label={`${step}/5`}
            className="mb-4 custom-progress-bar"
          />
          <Form onSubmit={handleSubmit}>
            {/* Step-based content */}
         
              {step === 1 && (
              <>
                <div className="question-title">
                    You need Consultation for Self or someone else?
                  </div>
                  <div className="checkbox-group">
                    <label
                      className={`checkbox-button ${
                        formData.consultationFor === "self" ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationFor"
                        value="self"
                        checked={formData.consultationFor === "self"}
                        onChange={() => handleOptionSelect("consultationFor", "self")}
                      />
                      Yes, for me
                    </label>

                    <label
                      className={`checkbox-button ${
                        formData.consultationFor === "someone else" ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationFor"
                        value="someone else"
                        checked={formData.consultationFor === "someone else"}
                        onChange={() => handleOptionSelect("consultationFor", "someone else")}
                      />
                      No, for someone else
                    </label>
                  </div>



                <Form.Group controlId="fullName" className="mt-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </Form.Group>

                <Form.Group controlId="dateOfBirth" className="mt-3">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="contactInfo" className="mt-3">
                  <Form.Label>Contact Information (Email/Phone)</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactInfo"
                    value={formData.contactInfo}
                    onChange={handleChange}
                    placeholder="Enter your contact information"
                  />
                </Form.Group>

                <Form.Group controlId="preferredContact" className="mt-3">
                  <Form.Label>Preferred Method of Contact</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Email"
                    name="preferredContact"
                    value="Email"
                    checked={formData.preferredContact === "Email"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Phone"
                    name="preferredContact"
                    value="Phone"
                    checked={formData.preferredContact === "Phone"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Text"
                    name="preferredContact"
                    value="Text"
                    checked={formData.preferredContact === "Text"}
                    onChange={handleChange}
                  />
                </Form.Group>
              </>
            )}

{step === 2 && (
              <>
                <Form.Group controlId="reasonForCounseling">
                  <Form.Label>What brings you to counseling?</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="reasonForCounseling"
                    value={formData.reasonForCounseling}
                    onChange={handleChange}
                    placeholder="Briefly describe the issues or challenges you are facing."
                  />
                </Form.Group>

                <Form.Group controlId="previousCounseling" className="mt-3">
                  <Form.Label>Have you previously attended counseling or therapy sessions?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="previousCounseling"
                    value="Yes"
                    checked={formData.previousCounseling === "Yes"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    name="previousCounseling"
                    value="No"
                    checked={formData.previousCounseling === "No"}
                    onChange={handleChange}
                  />
                </Form.Group>

                {formData.previousCounseling === "Yes" && (
                  <Form.Group controlId="previousTherapyType" className="mt-3">
                    <Form.Label>If yes, what type of therapy did you receive?</Form.Label>
                    <Form.Control
                      type="text"
                      name="previousTherapyType"
                      value={formData.previousTherapyType}
                      onChange={handleChange}
                      placeholder="Specify the therapy type"
                    />
                  </Form.Group>
                )}

                <Form.Group controlId="takingMedication" className="mt-3">
                  <Form.Label>Are you currently taking any medications related to mental health?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="takingMedication"
                    value="Yes"
                    checked={formData.takingMedication === "Yes"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    name="takingMedication"
                    value="No"
                    checked={formData.takingMedication === "No"}
                    onChange={handleChange}
                  />
                </Form.Group>

                {formData.takingMedication === "Yes" && (
                  <Form.Group controlId="medicationList" className="mt-3">
                    <Form.Label>If yes, please list:</Form.Label>
                    <Form.Control
                      type="text"
                      name="medicationList"
                      value={formData.medicationList}
                      onChange={handleChange}
                      placeholder="List medications"
                    />
                  </Form.Group>
                )}
              </>
            )}

            {step === 3 && (
              <>
                <Form.Group controlId="mentalHealthDiagnosis">
                  <Form.Label>Have you ever been diagnosed with any mental health conditions?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="mentalHealthDiagnosis"
                    value="Yes"
                    checked={formData.mentalHealthDiagnosis === "Yes"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    name="mentalHealthDiagnosis"
                    value="No"
                    checked={formData.mentalHealthDiagnosis === "No"}
                    onChange={handleChange}
                  />
                </Form.Group>

                {formData.mentalHealthDiagnosis === "Yes" && (
                  <Form.Group controlId="diagnosisDetails" className="mt-3">
                    <Form.Label>If yes, please specify:</Form.Label>
                    <Form.Control
                      type="text"
                      name="diagnosisDetails"
                      value={formData.diagnosisDetails}
                      onChange={handleChange}
                      placeholder="Specify diagnosis"
                    />
                  </Form.Group>
                )}

                <Form.Group controlId="recentLifeChanges" className="mt-3">
                  <Form.Label>Have you experienced any significant life changes or traumatic events recently?</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="recentLifeChanges"
                    value={formData.recentLifeChanges}
                    onChange={handleChange}
                    placeholder="Describe recent changes or events"
                  />
                </Form.Group>
              </>
            )}

            {step === 4 && (
              <>
                <Form.Group controlId="sessionFrequency">
                  <Form.Label>How often would you like to attend sessions?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Weekly"
                    name="sessionFrequency"
                    value="Weekly"
                    checked={formData.sessionFrequency === "Weekly"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Bi-weekly"
                    name="sessionFrequency"
                    value="Bi-weekly"
                    checked={formData.sessionFrequency === "Bi-weekly"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Monthly"
                    name="sessionFrequency"
                    value="Monthly"
                    checked={formData.sessionFrequency === "Monthly"}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="virtualCounseling" className="mt-3">
                  <Form.Label>Are you open to virtual counseling sessions?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="virtualCounseling"
                    value="Yes"
                    checked={formData.virtualCounseling === "Yes"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    name="virtualCounseling"
                    value="No"
                    checked={formData.virtualCounseling === "No"}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="additionalNotes" className="mt-3">
                  <Form.Label>Additional notes or information</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Any additional information you'd like to share"
                  />
                </Form.Group>
              </>
            )}
{step === 5 && (
  <>
    <Form.Group controlId="dateSelection" className="mt-3">
      <Form.Label>
        Select an appointment date
        <span className="disclaimer"> (You can only book slots for the next 10 days)</span>
      </Form.Label>
      <ReactDatePicker
        selected={formData.appointmentDate ? new Date(formData.appointmentDate) : null}
        onChange={(date) => handleOptionSelect("appointmentDate", date.toISOString().split("T")[0])}
        minDate={new Date()}
        maxDate={new Date(new Date().setDate(new Date().getDate() + 10))}
        placeholderText="Select a date"
        className="form-control date-picker"
        dateFormat="yyyy-MM-dd"
      />
    </Form.Group>

    <Form.Group controlId="timeSlotSelection" className="mt-3">
      <Form.Label>Select a time slot</Form.Label>
      <div className="time-slot-group">
        <label
          className={`time-slot ${
            formData.timeSlot === "Morning" ? "active" : ""
          }`}
        >
          <input
            type="radio"
            name="timeSlot"
            value="Morning"
            checked={formData.timeSlot === "Morning"}
            onChange={(e) => handleChange(e)}
          />
          Morning (10AM - 1PM)
        </label>
        <label
          className={`time-slot ${
            formData.timeSlot === "Afternoon" ? "active" : ""
          }`}
        >
          <input
            type="radio"
            name="timeSlot"
            value="Afternoon"
            checked={formData.timeSlot === "Afternoon"}
            onChange={(e) => handleChange(e)}
          />
          Afternoon (2PM - 4PM)
        </label>
        <label
          className={`time-slot ${
            formData.timeSlot === "Evening" ? "active" : ""
          }`}
        >
          <input
            type="radio"
            name="timeSlot"
            value="Evening"
            checked={formData.timeSlot === "Evening"}
            onChange={(e) => handleChange(e)}
          />
          Evening (6PM - 8PM)
        </label>
      </div>
    </Form.Group>

    <Form.Group controlId="consent" className="mt-3">
      <Form.Label>Do you consent to treatment and agree to our terms and conditions?</Form.Label>
      <Form.Check
        type="radio"
        label="Yes"
        name="consent"
        value="Yes"
        checked={formData.consent === "Yes"}
        onChange={handleChange}
      />
      <Form.Check
        type="radio"
        label="No"
        name="consent"
        value="No"
        checked={formData.consent === "No"}
        onChange={handleChange}
      />
    </Form.Group>
  </>
)}
            


            {/* Navigation Buttons */}
            <div className="button-container mt-4">
              {step > 1 && (
                <Button variant="secondary" onClick={handleBack}>
                  Back
                </Button>
              )}
              {step < 5 && (
                <Button variant="primary" onClick={handleNext}>
                  Next
                </Button>
              )}
              {step === 5 && (
                <Button variant="success" type="submit">
                  Submit
                </Button>
              )}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookAppointment;
