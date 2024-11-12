import React from 'react';
import './AnnouncementStrip.css'; // Import the CSS for styling

const AnnouncementStrip = () => {
  return (
    <div className="announcement-strip">
      <div className="container-strip d-flex justify-content-between align-items-center">
        {/* Left section with text */}
        <div className="announcement-text d-flex align-items-center">
          <span className="announcement-heading">Exciting News</span>
          <span className="announcement-details">Free 15-minute consultation for new clients! Book now to get started!</span>
        </div>

        {/* Right section with call to action */}
        <div className="announcement-action">
          <span className="book-now">BOOK NOW →</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementStrip;
