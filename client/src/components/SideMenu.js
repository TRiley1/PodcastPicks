import React, { useState } from "react";    
import BurgerMenu from "./icons/BurgerMenu";
import NavBar from "./NavBar";


const SideMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div>
        <button onClick={toggleMenu} className="menu-button"><BurgerMenu /></button>
        <div className={`sidemenu ${isMenuOpen ? 'open' : 'closed'}`}>
          {isMenuOpen && <NavBar />}
        </div>
      </div>
    );
  };
  
  export default SideMenu;
