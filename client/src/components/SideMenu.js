import React, { useState } from "react";
import BurgerMenu from "./icons/BurgerMenu";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="top-banner">
        <div>
          {!isMenuOpen && (
            <button onClick={toggleMenu} className="menu-button">
              <BurgerMenu />
            </button>
          )}
          <div className={`sidemenu ${isMenuOpen ? "open" : "closed"}`}>
            {isMenuOpen && <NavBar toggleMenu={toggleMenu} />}
          </div>
        </div>
        <div classname="home-logo-container">
          <Link to="/" className="home-logo">
            PP
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
