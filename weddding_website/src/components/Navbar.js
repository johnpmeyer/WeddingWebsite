import React, {useState} from 'react';
import Logo from "../Assets/website_logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import List from "@mui/material/List";
import { 
  Box, 
  Drawer, 
  ListItem, 
  ListItemButton, 
  ListItemText 
} from "@mui/material";
import { Link } from 'react-router-dom';

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home", 
      link: "/"
    }, 
    {
      text: "Event Details", 
      link: "/event-details"
    }, 
    {
      text: "Where to Stay / Things to Do", 
      link: "/where-to-stay"
    }, 
    {
      text: "Puzzles and Fun ;)", 
      link: "/puzzles-fun"
    }, 
    {
      text: "Comments", 
      link: "/comments"
    }
  ]

  return (
    <nav>
      <div className="nav-logo-container">
        <Link to="/">
          {<img src={Logo} alt="Lindsay and John's website logo" />}
        </Link>
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/event-details">Event Details</Link>
        <Link to="/where-to-stay">Where to Stay / Things to Do</Link>
        <Link to="/puzzles-fun">Puzzles and Fun ;)</Link>
        <Link to="/comments">Comments</Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} color='#D58FC4' strokeWidth={"2"}/>
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
                  <ListItemText primary={item.text} primaryTypographyProps={{color: '#D58FC4'}}></ListItemText>
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