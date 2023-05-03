import React, { useState } from "react";

import { Link } from "react-router-dom";
import CloseMenu from "./icons/CloseMenu";

const NavBar = ({ toggleMenu }) => {
  return (
    <>
      <div className="navbar-container">
        <div>
          <button onClick={toggleMenu} className="close-menu-button">
            <CloseMenu />
          </button>
        </div>
        <ul>
          <li className="navbar-header">
            <h3>Menu</h3>
          </li>
          <li className="navbar-li">
            <Link to="/" className="navbar-button" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/explore" className="navbar-button" onClick={toggleMenu}>
              Explore
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/favourites" className="navbar-button" onClick={toggleMenu}>
              Favourites
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/about" className="navbar-button" onClick={toggleMenu}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
