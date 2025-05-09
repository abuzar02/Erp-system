"use client";
import React, { useState } from "react";
import "./CustomerMaster.css";

const CustomerMaster = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });

  const [customers, setCustomers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.code || !formData.email) {
      alert("Please fill in required fields");
      return;
    }

    if (editIndex !== null) {
      const updated = [...customers];
      updated[editIndex] = formData;
      setCustomers(updated);
      setEditIndex(null);
    } else {
      setCustomers([...customers, formData]);
    }

    setFormData({
      name: "",
      code: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "",
      country: "",
    });
  };

  const handleEdit = (index) => {
    setFormData(customers[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = customers.filter((_, i) => i !== index);
    setCustomers(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Customer Master</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Customer Name *" required />
          <input name="code" value={formData.code} onChange={handleChange} placeholder="Customer Code *" required />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required />
          <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
          <input name="city" value={formData.city} onChange={handleChange} placeholder="City" />
          <input name="state" value={formData.state} onChange={handleChange} placeholder="State" />
          <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
        </div>

        <div style={{ marginTop: "15px" }}>
          <button type="submit">{editIndex !== null ? "Update" : "Add Customer"}</button>
          <button type="button" onClick={() => setFormData({
            name: "", code: "", phone: "", email: "", address: "", city: "", state: "", country: ""
          })} style={{ marginLeft: "10px" }}>
            Reset
          </button>
        </div>
      </form>

      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Code</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="8" align="center">No customers found</td>
            </tr>
          ) : (
            customers.map((customer, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{customer.name}</td>
                <td>{customer.code}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.city}</td>
                <td>Active</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(index)} style={{ color: "red" }}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerMaster;
