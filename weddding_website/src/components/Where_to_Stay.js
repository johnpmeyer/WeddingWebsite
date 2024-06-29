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
                <iframe width="800" height="540" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=800&amp;height=540&amp;hl=en&amp;q=1958%20Varley%20St%20%20Pittsburgh+(Pittsburgh%20WBU)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=ce0144f6643745a0acf22e1d30ce234d4e672dc9'></script>
                <p className='primary-text'>What will be good</p>
            </div>
        </div>
      </div>
      
    )
  }
  
  export default Where_to_Stay
