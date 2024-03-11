import React from 'react';
import Logo from "../assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { 
    Box, 
    Drawer, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText 
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "mui/icons-material/ShoppingCartrounded";
import { ShoppingCartRounded } from '@mui/icons-material';


const Navbar = () => {
    
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
        }, 
        {
            text:"About",
            icon:<InfoIcon/>
        }, 
        {
            text:"Testimonials",
            icon:<CommentRoundedIcon/>
        }, 
        {
            text:"Contact",
            icon:<PhoneRoundedIcon/>
        }, 
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon/>
        }, 
        
    ]
  
    return <div className="home-container"><Navbar /></div>
}

export default Navbar
