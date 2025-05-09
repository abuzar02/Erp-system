"use client";
import React from "react";
import { FaSearch, FaUserCircle, FaSun } from "react-icons/fa";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ toggleMenu, menuOpen }) => {

  
  return (
    <div className="header">
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <h2 className="logo">Logo</h2>
      <div className="search-sec">
        <input type="text" placeholder="Search" className="search-input" />
        <FaSearch className="icon" />
      </div>
      <div className="header-right">
        <FaSun className="icon" />
        <FaUserCircle className="icon user" />
      </div>
    </div>
  );
};

export default Navbar;
