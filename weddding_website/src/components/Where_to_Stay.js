import React from 'react'
import Navbar from './Navbar'

function Where_to_Stay() {
    return (
      <div className='App'>
        <div className='event-details-container'>
            <Navbar/>
            <div className='event-details-main-text-container'>
                <h1 className='primary-heading'>Where to Stay</h1>
                <p className='primary-text'>Map of the area</p>
                <p className='primary-text'>What will be good</p>
            </div>
        </div>
      </div>
      
    )
  }
  
  export default Where_to_Stay
