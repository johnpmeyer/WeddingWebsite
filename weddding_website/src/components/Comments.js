import React from 'react'
import Navbar from './Navbar'
import ConstructionImage from "../Assets/under_construction.jpg";

function Comments() {
    return (
      <div className = 'App'>
        <div className='event-details-container'>
            <Navbar/>
            <div className='event-details-main-text-container'>
                <p className='primary-text'>Coming Some Day, Hopefully!</p>
                <img src={ConstructionImage} alt=""></img>
            </div>
        </div>
      </div>

    )
  }
  
  export default Comments