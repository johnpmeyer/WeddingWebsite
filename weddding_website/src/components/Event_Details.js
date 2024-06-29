import React from 'react';
import Navbar from './Navbar';

function Event_Details() {
  return (
    <div className='App'>
      <div className='event-details-container'>
          <Navbar/>
          <div className='event-details-main-text-container'>
              <h1 className='primary-heading'>Event Details</h1>
              <p className='primary-text'><strong>Location:</strong><a href = "https://www.google.com/maps/place/The+WBU+Event+Venue/@40.4665571,
              -79.9941594,17z/data=!3m1!4b1!4m6!3m5!1s0x8834f3558aa39293:0xb4d846675d8e2c8!8m2!3d40.4665571!4d-79.9915845!16s%2Fg%2F11g2yydy1v?entry=ttu">WBU Event Venue in Troy Hill, Pittsburgh, PA.</a></p>
              <p className='primary-text'>Other info coming in late 2024</p>
          </div>
      </div>
    </div>
  )
}

export default Event_Details
