"use client"
import React from "react";
import './Dashboard.css'
import { FaUsers, FaUserAlt, FaWallet, FaRegMoneyBillAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import SalesChart from "../SalesChart/SalesChart";
import UsersTable from "../SalesChart/UsersTable/UsersTable";

const data = [
  {
    title: "Total Users",
    value: "20,000",
    change: "+5000",
    description: "Last 30 days users",
    icon: <FaUsers />,
    color: "light-blue",
    IconBgColor: "light-blue-background"
  },
  {
    title: "Total Subscription",
    value: "15,000",
    change: "-800",
    description: "Last 30 days subscription",
    icon: <GiReceiveMoney />,
    color: "light-purple",
    decrease: true,
    IconBgColor: "light-purple-background"
  },
  {
    title: "Total Free Users",
    value: "5,000",
    change: "+200",
    description: "Last 30 days users",
    icon: <FaUserAlt />,
    color: "light-indigo",
    IconBgColor: "light-sky-background"
  },
  {
    title: "Total Income",
    value: "$42,000",
    change: "+$20,000",
    description: "Last 30 days income",
    icon: <FaWallet />,
    color: "light-green",
    IconBgColor: "light-green-background"
  },
  {
    title: "Total Expense",
    value: "$30,000",
    change: "+$5,000",
    description: "Last 30 days expense",
    icon: <FaRegMoneyBillAlt />,
    color: "light-red",
    IconBgColor: "light-red-background"
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="card-container">
        {data.map((item, index) => (
          <div className={`card ${item.color}`} key={index}>
            <div className="card-content">
              <div className="card-text">
                <p className="card-title">{item.title}</p>
                <h3>{item.value}</h3>
                <p
                  className={`change ${
                    item.decrease ? "negative" : "positive"
                  }`}
                >
                  {item.change} <span>{item.description}</span>
                </p>
              </div>
              <div className={`card-icon ${item.IconBgColor}`}>{item.icon}</div>
            </div>
          </div>
        ))}

       
      </div>
      <div className="sales-chart">
          <SalesChart />
        </div>
        <div className="UserTable">
          <UsersTable />
        </div>
    </div>
  );
};

export default Dashboard;
