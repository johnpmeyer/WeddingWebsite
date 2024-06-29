import React from 'react'
import Navbar from './Navbar'
import AreaMap from './AreaMap';


function Where_to_Stay() {
    return (
      <div className='App'>
        <div className='where-to-stay-container'>
            <Navbar/>
            <div className='where-to-stay-main-text-container'>
                <h1 className='primary-heading'>Wedding Location</h1>
                <iframe src="https://maps.google.com/maps?width=800&amp;height=540&amp;hl=en&amp;q=1958%20Varley%20St%20%20Pittsburgh+(Pittsburgh%20WBU)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=ce0144f6643745a0acf22e1d30ce234d4e672dc9'></script>
                <p className='primary-text'><br></br>Hotel block information coming.</p>
                <p className='primary-text'><br></br>Neighborhoods</p>
                <p className='supporting-text'><br></br>If you are considering staying at an AirBNB or VRBO, a few nice neighborhoods for walking and restaurants are:</p>
                <ul className = 'supporting-list'>
                  <li><strong>North Side & Mexican War Streets:</strong> Area of town just north of downtown, also close to the venue. Allegheny Commons is a beautiful park here, and there is also a river walk nearby.</li>
                  <li><strong>Strip District:</strong> Also close to the Venue, lots of international grocery stores, restaurants, and bars.</li>
                  <li><strong>Lawrenceville:</strong> Fairly close to the Venue - lots of bars, shops, and restaurants. It has a younger crowd.</li>
                  <li><strong>Shadyside:</strong> Upscale neightborhood with beautiful homes. Very walkable.</li>
                  <li><strong>Squirell Hill:</strong> Walkable neighborhood with lots of businesses. Borders two large parks, Frick and Schenley - which are both fantastic.</li>
                  <li><strong>Mount Washington:</strong> Not as many businesses as the other neighborhoods, but probably more large houses and beautiful views of the city.</li>
                </ul>
                <br></br>
                <p className='primary-text'><br></br>Other Things to Do</p>
                <ul className = 'supporting-list'>
                  <li><strong>Parks!</strong> Frick and Schenley Parks are both beautiful, large parks with lots of trails. Point State Park downtown is a pretty place where the rivers converge.</li>
                  <li><strong>Phipps Botanic Garden:</strong> Botanic garden in Schenley Park.</li>
                  <li><strong>Cathedral of Learning:</strong> Iconic 40+ story gothic building on Pitt's campus. There's tours of their themed classrooms ("Nationality Rooms").</li>
                  <li><strong>Maxo Vanka Murals:</strong> Incredible murals inside a Croatian Catholic Church. You have to go on a tour which typically run Saturday mornings.</li>
                  <li><strong>Museums:</strong> Carnegie Museum of Art and Natural History near Pitt's campus is great. The Andy Warhol Museum and Matress Factory in the North Side are also neat stops.</li>
                  <li><strong>Inclines:</strong> Old-fashioned trains that run up Mount Washington. They cost about $5 per person, round trip. There are two inclines (Monongahela and Duquesne)</li>
                </ul>
                <br></br>
            </div>
        </div>
      </div>
      
    )
  }
  
  export default Where_to_Stay
