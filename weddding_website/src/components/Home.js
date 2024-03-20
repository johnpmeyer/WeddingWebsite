import React from 'react';
import BannerImage from "../Assets/lindsay_john_7.jpg";
import Navbar from './Navbar'

function Home() {
  return (
    <div className="home-container"> 
      <Navbar/>
      <div className = "home-banner-container">
        <div className="home-text-section">
            <h1 className="primary-heading">
            Lindsay & John
            </h1>
            <p className="primary-text">September 6, 2025</p>
            <p className="primary-text">Pittsburgh, PA</p>
        </div>
        <div className="home-image-section">
            <img src={BannerImage} alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default Home
