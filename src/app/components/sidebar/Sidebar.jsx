"use client";
import React from "react";
import { FaTachometerAlt,  FaComments, FaCalendarAlt, FaThLarge, FaFileInvoice, FaRobot, FaBitcoin, FaCubes, FaFileAlt  } from "react-icons/fa";
import "./sidebar.css";
import { TbDatabaseSearch } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <ul className="menu">
        <li className="active"><FaTachometerAlt /> Dashboard</li>
        <p className="section">Application</p>
        <li><TbDatabaseSearch /> Enquiry</li>
        <li><FaFileAlt  /> Job/Project</li>
        <li><FaCalendarAlt /> Procurement</li>
        <li><FaThLarge /> Inventory</li>
        <li><FaFileInvoice /> Finance & Account</li>
      </ul>
    </div>
  );
};

export default Sidebar;
