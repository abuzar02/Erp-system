import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import "./globals.css";
const page = () => {
  return (
    <div>
      <div className="dff">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="dashboard">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default page;
