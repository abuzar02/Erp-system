"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./SalesChart.css";

const data = [
  { month: "Jan", value: 8000 },
  { month: "Feb", value: 18000 },
  { month: "Mar", value: 12000 },
  { month: "Apr", value: 25000 },
  { month: "May", value: 13000 },
  { month: "Jun", value: 30000 },
  { month: "Jul", value: 14000 },
  { month: "Aug", value: 27000 },
  { month: "Sep", value: 11000 },
  { month: "Oct", value: 22000 },
  { month: "Nov", value: 10000 },
  { month: "Dec", value: 24000 },
];

const SalesChart = () => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <p className="title">Sales Statistic</p>
         
          <div className="change-info">
          <h2 className="amount">$27,200</h2>
            <span className="change-up">10% ▲</span>
            <span className="daily-change">+ $1500 Per Day</span>
          </div>
        </div>
        <select className="select-dropdown">
          <option>Yearly</option>
          <option>Monthly</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis domain={[0, 36000]} tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip formatter={(value) => `$${value}`} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
