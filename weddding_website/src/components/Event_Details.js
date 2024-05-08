import React from 'react';
import Navbar from './Navbar';

function Event_Details() {
  return (
    <div className='App'>
      <div className='event-details-container'>
          <Navbar/>
          <div className='event-details-main-text-container'>
              <h1 className='primary-heading'>Event Details</h1>
              <p className='primary-text'><strong>Location:</strong> WBU Event Venue in Troy Hill, Pittsburgh, PA.</p>
              <p className='primary-text'>Other info coming in late 2024</p>
          </div>
      </div>
    </div>
  )
}

export default Event_Details
