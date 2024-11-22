import React from 'react';
import './Navbar.css'; // Custom CSS file

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light shadow-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left - Logo */}
        <a className="navbar-brand" href="/">
          {/* Replace with your logo */}
          <img src="https://cdn-icons-png.flaticon.com/512/236/236831.png" alt="Logo" className="navbar-logo" />
        </a>

        {/* Book Appointment button with calendar icon */}
        <a
          className="btn btn-outline-peach book-appointment-btn d-flex align-items-center"
          href="/bookAppointment"
        >
          {/* Calendar Icon */}
          <i className="fas fa-calendar-alt mr-2"></i> {/* Font Awesome Calendar Icon */}
          Book Appointment
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
