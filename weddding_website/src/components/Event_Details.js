import React from 'react';
import Navbar from './Navbar';

function Event_Details() {
  return (
    <div className='App'>
      <div className='event-details-container'>
          <Navbar/>
          <div className='event-details-main-text-container'>
              <h1 className='primary-heading'>Event Details</h1>
              <div class = "agenda-container">
              <div class="agenda-item"><strong>Date: </strong> <span class="event">Saturday, September 6, 2025</span></div>
                <div class='agenda-item'><strong>Location:</strong><a href = "https://www.google.com/maps/place/The+WBU+Event+Venue/@40.4665571,
                -79.9941594,17z/data=!3m1!4b1!4m6!3m5!1s0x8834f3558aa39293:0xb4d846675d8e2c8!8m2!3d40.4665571!4d-79.9915845!16s%2Fg%2F11g2yydy1v?entry=ttu">WBU Event Venue in Troy Hill, Pittsburgh, PA.</a></div>
                <div class="agenda-item"><strong>Attire:</strong><a href = "https://www.pinterest.com/lindsay_hagerty/wedding-guest-inspiration/?invite_code=748b51e48a0343508b6112b616ed6b8e&sender=245727860826886436">Formal Garden Party </a> (more details below)</div>
                <div class="agenda-item"><strong>4:00 PM - 4:30 PM: </strong> <span class="event">Ceremony</span></div>
                <div class="agenda-item"><strong>4:30 PM - 5:45 PM: </strong> <span class="event">Cocktail Hour</span></div>
                <div class="agenda-item"><strong>6:15 PM - 10:00 PM: </strong> <span class="event">Dinner + Dancing</span></div>

              <p><br></br>The ceremony and reception are both taking place at the same property!</p>
              <p><br></br>The ceremony and cocktail hour will take place outdoors (with an indoor rain plan), so please plan accordingly with your choice of shoes, sunscreen etc.</p>
              <p><br></br>Our dinner will be buffet-style with a cocktail hour and some snacks available throughout the evening :)</p>

              <p><br></br>More details to come later in 2025.</p>

              <p className='primary-text'><br></br>Attire Details</p>

              <p><br></br>We're aware that formal garden party may be confusing, so here is some general guidance!</p>

              <p><br></br><a href = "https://www.pinterest.com/lindsay_hagerty/wedding-guest-inspiration/?invite_code=748b51e48a0343508b6112b616ed6b8e&sender=245727860826886436">There is a link here </a> 
              with a Pinterest board Lindsay made. Some general descriptors of this attire are: flowy, formal, colorful, handkerchief, vintage, natural fibers! With sensible 
              shoes for grass and mulch.</p>

              <p><br></br>In general, avoiding all-black attire is best for this style.</p>

              <p><br></br>Please do not feel the need to break the bank finding a unique outfit for just this wedding. We hope you enjoy dressing for this! <br></br></p>


              </div>
          </div>
      </div>
    </div>
  )
}

export default Event_Details
