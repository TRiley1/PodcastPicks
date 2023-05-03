import React, { useState } from "react";

import { Link } from "react-router-dom";
import CloseMenu from "./icons/CloseMenu";

const NavBar = () => {
  return (
    <>
    <div className="close-menu-button"><CloseMenu/></div>
    <ul>
      <li>
        <h3>Menu</h3>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/explore">Explore</Link>
      </li>
      <li>
        <Link to="/favourites">Your Favourites</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    </>
  );
};

export default NavBar;
