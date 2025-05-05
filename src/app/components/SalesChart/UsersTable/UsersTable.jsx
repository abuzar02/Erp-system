"use client";
import React, { useState } from "react";
import "./UsersTable.css";

const RegisterUsers = [
  {
    name: "Dianne Russell",
    email: "redaniel@gmail.com",
    date: "27 Mar 2024",
    plan: "Free",
    status: "Active",
    avatar: "/avatars/avatar1.png",
  },
  {
    name: "Wade Warren",
    email: "xterris@gmail.com",
    date: "27 Mar 2024",
    plan: "Basic",
    status: "Active",
    avatar: "/avatars/avatar2.png",
  },
  {
    name: "Albert Flores",
    email: "seannand@mail.ru",
    date: "27 Mar 2024",
    plan: "Standard",
    status: "Active",
    avatar: "/avatars/avatar3.png",
  },
  {
    name: "Bessie Cooper",
    email: "igerrin@gmail.com",
    date: "27 Mar 2024",
    plan: "Business",
    status: "Active",
    avatar: "/avatars/avatar4.png",
  },
  {
    name: "Arlene McCoy",
    email: "fellora@mail.ru",
    date: "27 Mar 2024",
    plan: "Enterprise",
    status: "Active",
    avatar: "/avatars/avatar5.png",
  },
];

const UsersTable = () => {
  const [activeTab, setActiveTab] = useState("registered");

  return (
    <div className="users-card">
      <div className="users-header">
        <div className="tabs">
          <button
            className={activeTab === "registered" ? "tab active" : "tab"}
            onClick={() => setActiveTab("registered")}
          >
            Latest Registered <span className="badge">35</span>
          </button>
          <button
            className={activeTab === "subscribe" ? "tab active" : "tab"}
            onClick={() => setActiveTab("subscribe")}
          >
            Latest Subscribe <span className="badge gray">35</span>
          </button>
        </div>
        <a href="#" className="view-all">
          View All &gt;
        </a>
      </div>

      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>Users</th>
              <th>Registered On</th>
              <th>Plan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {RegisterUsers.map((user, idx) => (
              <tr key={idx}>
                <td className="user-info">
                  <img src={user.avatar} alt={user.name} />
                  <div>
                    <p className="name">{user.name}</p>
                    <p className="email">{user.email}</p>
                  </div>
                </td>
                <td>{user.date}</td>
                <td>{user.plan}</td>
                <td>
                  <span className="status">{user.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
