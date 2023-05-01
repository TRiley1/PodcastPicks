import React, { useState } from 'react';

import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return ( 
        <ul>
        <li><h3>Nav Bar</h3></li>
        <li><Link to="/">Home image</Link></li>
        <li onClick={handleClick}><SideMenu /></li>
        </ul>
     );
}
 
export default NavBar;