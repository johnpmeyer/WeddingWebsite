import React, {useState} from 'react';
import Logo from "../Assets/logo-joke2.jpg";


function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home"
    }, 
    {
      text: "Event Details"
    }, 
    {
      text: "Things to Do / Where to Stay"
    }, 
    {
      text: "Puzzles and Fun ;)"
    }, 
    {
      text: "Comments"
    }
  ]

  return (
    <nav>
      <div className="nav-logo-container">
        {/* <img src={Logo} alt="Bon Jovi Have a Nice Day Logo" /> */}
        <h1>Lindsay and John stylized logo</h1>
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">Event Details</a>
        <a href="">Things to Do / Where to Stay</a>
        <a href="">Puzzles and Fun ;)</a>
        <a href="">Comments</a>
      </div>
    </nav>
  )
}

export default Navbar