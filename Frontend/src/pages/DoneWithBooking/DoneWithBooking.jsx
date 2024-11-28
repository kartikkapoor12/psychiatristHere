import React from "react";
import { Button } from "react-bootstrap";
import "./DoneWithBooking.css"; // Custom CSS for styling

const BookingCompleted = () => {
  const handleBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="booking-completed d-flex justify-content-center align-items-center vh-100">
      <div className="card-booking shadow-lg p-5 text-center">
        <div className="icon-container mb-4">
          <img
            src="https://img.icons8.com/flat-round/344/checkmark.png"
            alt="Success"
          />
        </div>
        <h1 className="title mb-3">Booking Confirmed!</h1>
        <p className="description">
          Thank you for booking with us. Your appointment has been successfully
          completed. <br />
          You will soon receive a response from us.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="mt-4 btn-rounded"
          onClick={handleBackToHome}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default BookingCompleted;
