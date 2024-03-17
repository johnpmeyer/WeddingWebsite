import React, {useState} from 'react';
import Logo from "../Assets/logo-joke2.jpg";
import { HiOutlineBars3 } from "react-icons/hi2";
import List from "@mui/material/List";
import { 
  Box, 
  Drawer, 
  ListItem, 
  ListItemButton, 
  ListItemText 
} from "@mui/material";

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home", 
      link: "/"
    }, 
    {
      text: "Event Details", 
      link: "/"
    }, 
    {
      text: "Things to Do / Where to Stay", 
      link: "/"
    }, 
    {
      text: "Puzzles and Fun ;)", 
      link: "/"
    }, 
    {
      text: "Comments", 
      link: "/"
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
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box sx = {{width: 250}}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href={item.link}>
                  <ListItemText primary={item.text}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar