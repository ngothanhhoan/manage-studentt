/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyle.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <ul className='navbar'>
        <Link to={"/"}>
          <h1>Logo</h1>
        </Link>
      </ul>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to='/'>Home Page</Link>
        </li>
        <li>
          <Link to='/class'>Class</Link>
        </li>
        <li>
          <Link to='/about'>Student</Link>
        </li>
        <li>
          <Link to='/contact'>Calendar </Link>
        </li>
        <li>
          <Link to='/login'>Login </Link>
        </li>
      </ul>

      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
