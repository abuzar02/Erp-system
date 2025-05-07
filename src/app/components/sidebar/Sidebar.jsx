"use client";
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaComments,
  FaCalendarAlt,
  FaThLarge,
  FaFileInvoice,
  FaRobot,
  FaBitcoin,
  FaCubes,
  FaFileAlt,
} from "react-icons/fa";
import "./sidebar.css";
import { TbDatabaseSearch } from "react-icons/tb";
import { MdArrowDropDown } from "react-icons/md";

const Sidebar = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const handleClick = () => {
    setShowEnquiry((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="active">
          <FaTachometerAlt /> Dashboard
        </li>
        <p className="section">Application</p>
        <li
          onClick={handleClick}
          style={{ cursor: "pointer", listStyle: "none", position: "relative" }}
        >
          <TbDatabaseSearch /> Enquiry <MdArrowDropDown />
          <ul className={`New-Enquiry ${showEnquiry ? "show" : ""}`}>
            <li>New Enquiry</li>
          </ul>
        </li>
        <li>
          <FaFileAlt /> Job/Project
        </li>
        <li>
          <FaCalendarAlt /> Procurement
        </li>
        <li>
          <FaThLarge /> Inventory
        </li>
        <li>
          <FaFileInvoice /> Finance & Account
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
