"use client";
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaCogs,
  FaComments,
  FaFlask,
  FaIndustry,
  FaShoppingCart,
  FaCheckSquare,
  FaBoxes,
  FaTruck,
  FaHeadphones,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

import "./sidebar.css";
import Link from "next/link";

const Sidebar = ({ menuOpen }) => {
  const [showMasterSubmenu, setShowMasterSubmenu] = useState(false);

  return (
    <div className={`sidebar ${menuOpen ? "open" : ""}`}>
      <ul className="menu">
        <Link href="/">
        <li>
          <FaTachometerAlt /> My Dashboard
        </li>
        </Link>

        {/* Master with Dropdown */}
        <li
          className="menu-item"
          onClick={() => setShowMasterSubmenu(!showMasterSubmenu)}
        >
          <FaCogs /> Master <MdArrowDropDown style={{ marginLeft: "auto" }} />
        </li>
        {showMasterSubmenu && (
          <ul className={`submenu ${showMasterSubmenu ? "open" : ""}`}>
         <Link href="/CompanyMaster">
         <li>Company Master</li>
         </Link>
          <Link href="/CustomerMaster"><li>Customer Master</li></Link>
          <Link href="/SupplierMaster"><li>Supplier Master</li></Link>
        </ul>
        
        )}

        <Link href="/CRMMarketing"><li><FaComments /> CRM / Marketing</li></Link>
        <Link href="/RandDProjects"><li><FaFlask /> R & D Project</li></Link>
        <Link href="/Production"><li><FaIndustry /> Production</li></Link>
        <Link href="/Purchese"><li><FaShoppingCart /> Purchase</li></Link>
        <Link href="/QC"><li><FaCheckSquare /> QC</li></Link>
        <Link href="/Inventory"><li><FaBoxes /> Inventory</li></Link>
        <Link href="/Sales"><li><FaTruck /> Sales</li></Link>
        <Link href="/Service"><li><FaHeadphones /> Service</li></Link>
        <Link href="/Finance"><li><FaMoneyBillWave /> Finance</li></Link>
        <Link href="/HumanResource"><li><FaUsers /> Human Resource</li></Link>
      </ul>
    </div>
  );
};

export default Sidebar;
