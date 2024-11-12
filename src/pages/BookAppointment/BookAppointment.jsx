import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./BookAppointment.css";

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    consultationFor: "",
    fullName: "",
    dateOfBirth: "",
    contactInfo: "",
    preferredContact: "",
    emergencyContact: "",
    reasonForCounseling: "",
    previousCounseling: "",
    previousTherapyType: "",
    takingMedication: "",
    medicationList: "",
    mentalHealthDiagnosis: "",
    diagnosisDetails: "",
    recentLifeChanges: "",
    sessionFrequency: "",
    virtualCounseling: "",
    additionalNotes: "",
    consent: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleOptionSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add backend POST call here
  };

  return (
    <div className="form-container">
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <div className="question-title">Do you need consultation for self or someone else?</div>
                <div className="option-group">
                  <div
                    className={`option-button ${formData.consultationFor === "self" ? "active" : ""}`}
                    onClick={() => handleOptionSelect("consultationFor", "self")}
                  >
                    Yes, for me
                  </div>
                  <div
                    className={`option-button ${formData.consultationFor === "someone else" ? "active" : ""}`}
                    onClick={() => handleOptionSelect("consultationFor", "someone else")}
                  >
                    No, for someone else
                  </div>
                </div>
                
                <Form.Group controlId="fullName">
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

                <Form.Group controlId="emergencyContact" className="mt-3">
                  <Form.Label>Emergency Contact (Name and Phone Number)</Form.Label>
                  <Form.Control
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    placeholder="Enter emergency contact information"
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
                <Form.Group controlId="consent">
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

            <div className="button-container">
              {step > 1 && <Button variant="secondary" onClick={handleBack}>Back</Button>}
              {step < 5 && <Button variant="primary" onClick={handleNext}>Next</Button>}
              {step === 5 && <Button variant="success" type="submit">Submit</Button>}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookAppointment;
